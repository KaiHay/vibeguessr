hello
### 2 Main parts

Image generation

Google maps integration

Possible Design:
    Large array of places which the prompt selects then generates the images for those places, assign some coordinates to the places.
    Store those images in a db and when those specific places are chosen again they dont have to be generated, but can be selected.

    Generate the image at runtime, somehow get coordinates to know where-ish the image is. MAYBE get another ai to do that

    Probably gonna go with the first implementation, not sure how to store, but might store in the public folder but not sure the functionality of that with vercel

Plan:
    Tomorrow:
     compile a list of places and coordinates
     Connect the images to the front end
     Login page and try to start game engine
    Wed:
     auth stuff, maybe total points across all games, 
     see where I am at and how much more I could do and how much more I should do
     can always improve the styling and ux _-_


