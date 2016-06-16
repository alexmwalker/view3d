# View3d - Making all your Ds 3.

Renders any flat single-piece cover graphic into a 3d posable model. Ideal for dynamic book renderings, but useful for displaying DVD boxes, Blu-rays, Video Game packaging, software boxes and any other essentially cubic model.

Play with the demo here: http://codepen.io/alexmwalker/pen/EyPVLd

## Basic HTML 

This is the basic HTML structure for each book graphic. 

```html
    <div class="book size-mid">
        <div class="cover">
            <img src="img/scrum1.png" alt="Book cover: Scrum Novice to Ninja" />
        </div>
    </div>
```

At their simplest, all books should render square and flat with a simple shadow. The `.book` class is the frame to splace into your layout. The `.cover` class works to mask the IMG down to the front only. We *could* use `clip: rect` here, but this ensures older and less sophisticated devices get a clean result.

Three sizes are available `.size-small`, `.size-mid` and `.size-large`. These dimensions are set in the SASS variables. 
```html
    <div class="book size-small">
        <div class="cover">
            ...
 ```           
Adding `.view3d` allows the 3D CSS to be applied to the group, though the book will still be presented square until a 'posing' class is added.
```html
    <div class="book size-mid view3d">
        <div class="cover">
            ...
```  
### Posing Classes

Posing classes are used to rotate and position the 3d model. These classes have no effect without the presense of the `.view3d` class. I'm using a clock-centric class system to provide a half dozen basic 'poses'.
```css
    <div class="book size-mid view3d oclock-2">
        <div class="cover">
            ...
```
In this system, the viewer stands at 12 o'clock and the model is placed in the middle of the clock. If the `.oclock-12` is applied to the book, the book will face directly at the viewer (or no posing class, as this is the default).

             +------------+
             |   Viewer   |
             +------------+
                   12
              11        1
          10       ^        2
                   |
         9         |         3
               +-model-+
          8        +        4
        
              7         5
                   6
        
        +----------------------+
        |  Class = '.clock-12' |
        +----------------------+

The `.oclock-6` class show the viewer the reverse side of the model.

Of course, you're welcome to create your own poses to suit the product and layout you're working with.

Lastly you can choose to make the model react to the mouse by adding the `.hover` class. Currently, this will zoom the model slightly before slowly rotating it. 
```css
    <div class="book size-mid view3d angle-30 hover">
        <div class="cover">
            ...
```
## Sass

The Sass file generates a set of dimensions for the various model sizes off the back of three numbers.
```sass
    $height-small: 150px;
    $height-mid: 300px;
    $height-large: 480px;
```
These numbers can be changed to whatever you like.

Perspective is currently set at 3.5 times the height of the model. In 3d CSS, this represents the distance between your eyeball and the model. It helps to understand CSS perspective to work with this number. 

- When this distance (i.e. `perspective: 1200px`) is proportionally large (imagine a matchbox) the model will appear square and with little perspective distortion. 
- When the distance between eye and model is _proportionally_ small (i.e. `perspective: 120px`) – imagine looking up at the Empire State Building – the model will be warped by perspective. 

A number between 2 and 5 times the model height is about right for a book, DVD or similar sized item on a desktop. Also be aware that this number can't be set as a percentage in CSS (but you can use Sass to calculate it that way).

### Note

One challenge I haven't totally nailed at the moment: Items like DVDs and Blu-rays are easy because they have a standardized spine thickness. However, as we know, books vary in spine width based on page numbers. 

If you're only rendering one book, it's easy to just manually tuned the spine width (the Sass variable `$spine-ratio: 0.06;` as a factor of the model height). However, if you're rendering multiple books, you have a decision to make.

1. It there's not much variation in your spine width range, just go with it.
2. If you're keen, you might chose to standardize all your raw book graphics to an average. There's some extra work in that.
3. If you're REALLY keen, you'll need to somehow code the spine width into the modelling of each book. Maybe that's part of the naming convention that you can extract on-the-fly?  Maybe you calculate the spine width with maths. Spine width = Total bookwidth - (2 * cover width).

I'm using method one for now.

## JavaScript

The scripting creates a wrapping DIV around the `.cover` called `.bookgroup`. This is the DOM element we 'pose'.

Another created DIV called `.backcover` is inserted inside `.bookgroup` as well. That's all the structure we need to work with. We get the image source of the current book and write it into the background-image of `.backcover`. The spine is an `:after` pseudo element of `.backcover`. Happily, we can inherit the background-image from `.backcover` and center it.







