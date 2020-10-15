# Improvement Suggestions

## 1 - Pagination

Assuming that in a real world scenario this application would deal with a huge amount of e-mails, pagination would not only be better for navigation but essential for performance. To achieve good performance however, the pagination should be implemented from the backend and allow frontend to request only for the items when they will be displayed. 

</br>

## 2 - Sorting

### Implementation from backend

Considering pagination is implemented, the frontend would not be able sort the items it has not loaded. 

> E.g.: There are 10,000 e-mails in the database, but only 100 displayed in the screen. The frontend would only sort this 100 items providing incorrect results.

</br>

### Move sort button out of the table

I find sorting on tables header particularly useful when organizing just the information already displayed at that moment: The user knows exactly what will be displayed after the sorting is applied, just in a different order. 
In this application's case however, the sort should be done considering all items in the database. Thus, the information displayed in the table may be completely different from before applying the sorting. For this scenario, I believe having more descriptive options out of the table could be more intuitive, in a similar way other e-mail applications usually implement. 

> E.g.: “Sort by”: “Most Recent” / “Subject (A-Z)” / “Sender (A-Z)” / etc.

</br>

## 3 - Search

Implement search from the backend.

Button to clear search parameters and display the same content as before the search.

Provide more search options (e.g.: By sender, subject, etc.).

</br>

## 4 - Display alias instead of e-mail address

Specially in the table view, displaying the complete e-mail address clutters the screen and makes it hard to find information. When available, aliases should be displayed for better readability. 

> E.g: Instead of “mark.brown@company.com”, display “Mark Brown”.  

</br>

## 5 - Change datepicker date format

Change datepicker date format to match table's and keep consistency:
- Date picker format: yyyy/m/d (2020/5/5)
- Table format: yyyy/mm/dd (2020/05/05)

</br>

# Details already implemented

1 - Number of replies (third column) trims to >999 if number is higher than 1000.

2 - Taking advantage of React to only render elements when they need to be displayed, instead of keeping all unnecessary elements invisible in the screen, consuming resources. E.g.:
- When in mobile view, table is not loaded and vice versa;
- Messages are only loaded when expanded.