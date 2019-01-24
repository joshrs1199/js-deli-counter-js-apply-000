function takeANumber(line, name){
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}
function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  return "Currently serving " + line.shift() + ".";
}
function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty."
  }
  var i;
  var z = "The line is currently: ";
  for (i = 0; i < line.length; i++){
    if (i === line.length - 1){
      z += i + 1 + ". " + line[i];
    }
    else z += i + 1 + ". " + line[i] + ", ";
  }
  return z 
}