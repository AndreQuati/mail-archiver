## Development process

1 - Analyzed all details in the mockup and planned overall application layout

2 - Explored what to develop from scratch and what components to use from libraries
- Did a spike on how to use Material UI’s table, but decided to implement it from scratch due to high amount of customization and inflexibility on changing design
- Adopted the following components:
    - Date picker from _react-datepicker_
    - _Moment.js_ for dates comparison and formatting
    - _useMediaQuery_ from material-ui to identify device’s viewport and decide what components to render

3 - Proceed with development in the following order:
- Table
- Sort
- Search
- Mobile version


## Challenges
- First time implementing a react app from scratch completely by myself as well as most most things in this challenge
- Nothing felt impossible or particularly hard, however there was constant exploration on what would be the best methods / practices for each step 
- CSS alignment is tricky
- Implementing a responsive table with so many details as wrapping text
- Defining elements size and spacing just with the pdf mockup
- Spent considerable time finding a date picker that could be easily customized to match the mockup
- Deciding the layout for the expandable message - I would most likely prefer Microsoft Outlook layout, where the message is displayed in another panel, but this wouldn’t meet the requirement for opening multiple messages at once
- The sort logic, although relatively simple, still required some studying  
- Ensuring cross browser compability

What was easy:
- Adapting the mobile version once all components had been created


## Time spent

**Total:** Around 16 days, working approximately 5 hours/day.

Component | Time | Note
----- | ----- | ----- 
Table | 10d | Including material-ui spikes
Expandable message | 1d
Search | 1d
Mobile version | 2d 
Others | 2d | Design pattern exploration, initial setup, global variables creations, mock data, etc. 
