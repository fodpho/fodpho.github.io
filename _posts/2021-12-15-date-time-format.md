---
title:  "Date Time Format in Different Systems"
date:   2021-12-15
toc_sticky: true
tags: [cheatsheet,Android]
---

Date time format is a way to represent date-time-related values, it is commonly used in time to string conversions. Usually specifiers are used to represent date time components, for example, `%H` means hour and `%M` means minute. In this post, the usage of the date time format and corresponding scenarios will be introduced.

## `date` in Linux

`date` is a command line tool used to display and set time in Linux and macOS. On Linux distros, running the command without any parameters will give the current time in the current time zone. With the argument `-u`, the UTC time will be displayed.

```bash
$ date
Wed 15 Dec 2021 11:55:40 PM +01

$ date -u
Wed 15 Dec 2021 10:55:48 PM UTC
```

With the argument `-d` or `--date`, a specified date time can be displayed, the input format can be time, date, both, or even simple natural language. Here are a few examples.

```bash
$ date -d "19:00:01"
Wed 15 Dec 2021 07:00:01 PM +01

$ date -d "12/25/2012"
Tue 25 Dec 2012 12:00:00 AM +01

$ date -d "4:16:29 PM 4/1 5 years ago"
Fri 01 Apr 2016 04:16:29 PM +01

$ date -d "next Friday"
Fri 17 Dec 2021 12:00:00 AM +01
```

The output format can be changed as well, to do that, just append a format string to the end of the command. Do not forget the plus sign `+` at the beginning of the format string.

```bash
$ date -u "+%d/%m/%y %H:%M:%S %p"
15/12/21 11:01:12 PM

$ date -d "7:49:49 pm 49 days ago" "+%A %B %d %n%T"
Wednesday October 27 
19:49:49
```

Here is a list of specifiers from the `date` man page.

```
%%        a literal %
%t        a tab
%n        a newline

%c        locale's date and time (e.g., Thu Mar 3 23:05:25 2005)
%D        date; same as %m/%d/%y (e.g. 03/25/05)
%F        full date; like %+4Y-%m-%d (e.g. 2005-03-25)

%d        day of month (e.g., 01)
%-d       day of month without zero padding (e.g., 1)
%e        day of month, space padded; same as %_d
%m        month (01..12)
%-m       month without zero padding (1..12)
%Y        year (2005)
%y        last two digits of year (00..99)

%b        locale's abbreviated month name (e.g., Jan)
%B        locale's full month name (e.g., January)
%a        locale's abbreviated weekday name (e.g., Sun)
%A        locale's full weekday name (e.g., Sunday)
%u        day of week (1..7); 1 is Monday
%w        day of week (0..6); 0 is Sunday
%U        week number of year, with Sunday as first day of week (00..53)
%W        week number of year, with Monday as first day of week (00..53)
%q        quarter of year (1..4)

%T        time; same as %H:%M:%S
%R        24-hour hour and minute; same as %H:%M
%r        locale's 12-hour clock time (e.g., 11:11:04 PM)

%H        hour (00..23)
%I        hour (01..12)
%M        minute (00..59)
%S        second (00..60)
%p        AM or PM; blank if not known
%P        am or pm; blank if not known

%z        +hhmm numeric time zone (e.g., -0400)
%Z        alphabetic time zone abbreviation (e.g., EDT, or +01 if not known)

%s        seconds since 1970-01-01 00:00:00 UTC

Optional paddings (used after %):

-         (hyphen) do not pad the field
_         (underscore) pad with spaces
0         (zero) pad with zeros
^         use upper case if possible
```

## `date` in macOS

To print the current time on macOS, the command used is identical to the Linux case, `-u` can also be used, the format specifiers are almost the same, except that the upper case padding `^` is unavailable. However, to convert a specific input date time to another form, a different approach should be used, `-d` option cannot be used on macOS since it means different things. Here is an example


```bash
# On macOS
% date -j -f %Y%m%d-%H%M%S 20050325-192501 "+%A %B %d %n%r" 
Friday March 25 
07:25:01 PM
```

As shown in the example, option `-j` is used to tell the system not to set the date, `-f` is the input format indicator, followed by the input format string and the input date time. The output format string is at the end of the command, which is identical to the Linux case.

## Date time format in Android (Kotlin)

To get a string of date time in a specified format in Android, the `java.time.format.DateTimeFormatter` can be utilized. First import related libraries.

```kotlin
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
```

Then create the variable containing the time value and a formatter. The time string can be obtained by using the method `.format(formatter)`.

```kotlin
val current = LocalDateTime.now()
val formatter = DateTimeFormatter.ofPattern("d LLL, hh:mm a")
val timeString = current.format(formatter)
```

The `LocalDateTime` library can also be used to get other time values, more information can be found on the [LocalDateTime Document](https://developer.android.com/reference/kotlin/java/time/LocalDateTime). The following list contains some common used date time format specifiers, which is part of the [DateTimeFormatter Document](https://developer.android.com/reference/kotlin/java/time/format/DateTimeFormatter).

```
d        day of month (e.g., 1)
dd       day of month with zero padding (e.g., 01)
M        month of year (1, 2, ..., 12)
MM       month of year (01, 02, ..., 12)
MMM      month of year (Jan, Feb)
MMMM     month of year (January, February)
yy       year (99, 00, 01)
yyyy     year (1999, 2000, 2001)

e        day of week (1, 2)
ee       day of week (01, 02)
Note that The number depends on local settings,
if Sun is 1, Mon is 2, if Sun is 7, Mon is 1.

EEE      day of week (Mon, Tue)
EEEE     day of week (Monday, Tuesday)

a        AM, PM

h        hour (1-12)
H        hour (0-23)
hh       hour (01-12)
HH       hour (00-23)

m        minute (0-59)
mm       minute (00-59)
s        second (0-59)
ss       second (00-59)
SSS      fraction of second (3 digits maximum)
```

## More Information

- <https://www.unix.com/man-page/osx/1/date/>
- <https://man7.org/linux/man-pages/man1/date.1.html>
