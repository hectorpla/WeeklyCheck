# Append-only data database
+ tasks are appended to the task list
+ group by week according to UTC time


## Troubles caused by time zones
+ according to local time, the tasks originally on the same day might be split on two days
+ confusing and not easy to reconstruct the table presented on the front end
+ make analysis not straight forwards


# Straight-forward Structure 
+ user's attention to add task on date + upload timestamp

## problems
+ 
