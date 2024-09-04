# Setting Up
### make sure to import jQuery Library on <head>
1. Create an elemnt for the two elements to merge
2. Create an element with a class name left-element that you want to merge in the middle. Place it inside the element on #1.
3. Create an element with a class name right-element that you want to merge in the middle. Place it inside the lement on #1.
```html
  <div class="container">
      <div class="left-element">l</div>
      <div class="right-element">r</div>
  </div>
```
4. Call the plugin using the element with the class name on #1
```html
  <script>
      $(document).ready(function() {
          $('.container').mergeElements({
              mergePoint: $('.container').width()*.5
          });
      });
  </script>
```
