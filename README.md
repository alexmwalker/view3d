# view3d
Renders any flat single-piece cover graphic into a 3d posable model.

## Basic HTML 

This is the basic HTML structure for each book graphic. 

    <div class="book">
        <div class="cover">
            <img src="img/scrum1.png" alt="Scrum Novice to Ninja book" />
        </div>
    </div>

At their simplest, all books should render square and flat with a simple shadow. The `.book` class is the frame. The `.cover` class works to mask the IMG down to the front only. 

Three sizes are available `.size-small`, `.size-mid` and `.size-large`. These dimensions are set in the SASS variables. 

    <div class="book size-mid">
        <div class="cover">
            ...
            
Adding `.view3d` allows the 3D CSS to be applied to the group, though the book will still be presented square until a 'posing' class is added.

    <div class="book size-mid view3d">
        <div class="cover">
            ...
  
### Posing Classes

Pasing classes are used to rotate and position the 3d model. These classes have no effect without presense of the `.view3d` class.

    <div class="book size-mid view3d angle-30">
        <div class="cover">
            ...

Lastly you can choose to make the model react to the mouse by adding the `.hover` class. Currently, this will zoom the model slightly before slowly rotating it. 

    <div class="book size-mid view3d angle-30 hover">
        <div class="cover">
            ...

## Sass

The Sass file generates a set of dimensions for the various model sizes off the back of three numbers.

    $height-small: 150px;
    $height-mid: 300px;
    $height-large: 480px;

These numbers can be changed to whatever you like.

## JavaScript

The scripting creates a wrapping DIV around the `.cover` called `.bookgroup`. Another created DIV called `'backcover` is inserted inside `.bookgroup` as well. That's all we need.

