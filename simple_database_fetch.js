<script type="text/javascript">

#Hent events fra database med AngularJS
#Og setter dem inn i et vanlig JS array på klientsiden

var events = ["Event1","Event2","Event3","Event4","Event5"];
events.sort();
var eventsCount = events.length;

for(var i=0; i<=eventsCount; i++){
document.write(events[i] + ('<br />'));
}

</script>
