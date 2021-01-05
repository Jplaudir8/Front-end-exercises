This time I built up the same card component I made with Flexbox, but with Grid.

Our target is to make the layout look like this:

<p align="center">
    <img src="https://github.com/Jplaudir8/Front-end-exercises/blob/master/Practicing/Making%20a%20card%20component%20with%20Flexbox/Image-1.png" width="400" alt="" title="Arrangement">
</p>

<p align="center">
    <img src="https://github.com/Jplaudir8/Front-end-exercises/blob/master/Practicing/Making%20a%20card%20component%20with%20Flexbox/Image-2.png" width="800" alt="" title="Color and Font Scheme">
</p>

But obviously, since CSS Grid does not work like that, it would mostly look like this under the hood:

<p align="center">
    <img src="https://github.com/Jplaudir8/Front-end-exercises/blob/master/Practicing/Making%20a%20card%20component%20with%20Flexbox/Image-2.png" width="800" alt="" title="Color and Font Scheme">
</p>

<p align="center">
    <img src="https://github.com/Jplaudir8/Front-end-exercises/blob/master/Practicing/Making%20a%20card%20component%20with%20Flexbox/Image-2.png" width="800" alt="" title="Color and Font Scheme">
</p>

