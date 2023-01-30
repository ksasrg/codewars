/* DESCRIPTION:
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

DATE TIMEMATHEMATICSALGORITHMS */


function humanReadable (seconds) {
  let hh = Math.floor(seconds / 3600);
  hh = hh < 10 ? '0' + hh : hh;

  let mm = Math.floor((seconds % 3600) / 60);
  mm = mm < 10 ? '0' + mm : mm;

  let ss = seconds % 60;
  ss = ss < 10 ? '0' + ss : ss;
  
  return hh + ':' + mm + ':' + ss;
}