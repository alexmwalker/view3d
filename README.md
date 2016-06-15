# view3d
Renders any flat single-piece cover graphic into a 3d posable model.

## Basic HTML 

The basic HTML structure for each book graphic.

    <div class="book">
        <div class="cover">
            <img src="img/scrum1.png" alt="Scrum Novice to Ninja book" />
        </div>
    </div>

At their simplest, all books should render square and flat with a simple shadow. The `.book` class is the frame. The `.cover` class works to mask the IMG down to the front only. 

    <div class="book view3d">
        <div class="cover">
            ...
            
Adding `.view3d` allows the 3D CSS to be applied to the group.


## Sass

## JavaScript

The scripting creates a wrapping DIV around the `.cover` called `.bookgroup`. Another created DIV called `'backcover` is inserted inside `.bookgroup` as well. That's all we need.

