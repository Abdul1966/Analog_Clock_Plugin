<?php

class Analog_Clock{

    function dn_get_analog_clock(){ ?>
        <svg id="svgClock" class="svgClock" onclick="showPosition()">
        <line x1="100" y1="0" x2="100" y2="20" class = "dialLong"/>
        <line x1="140" y1="30" x2="150" y2="15" class = "dialLong"/>
        <line x1="170" y1="60" x2="185" y2="50" class = "dialLong"/>
        <line x1="180" y1="100" x2="200" y2="100" class = "dialLong"/>
        <line x1="170" y1="140" x2="185" y2="150" class = "dialLong"/>
        <line x1="140" y1="170" x2="150" y2="185" class = "dialLong"/>
        <line x1="100" y1="180" x2="100" y2="200" class = "dialLong"/>
        <line x1="60" y1="170" x2="50" y2="185" class = "dialLong"/>
        <line x1="30" y1="140" x2="15" y2="150" class = "dialLong"/>
        <line x1="30" y1="60" x2="15" y2="50" class = "dialLong"/>
        <line x1="55" y1="30" x2="45" y2="15" class = "dialLong"/>
        <line x1="0" y1="100" x2="20" y2="100" class = "dialLong"/>
     </svg>

     <script>
        ac = new AnalogClock;
        ac.startClock();
    </script>

     <?php
    }

}

function display_clock(){
    $ac= new Analog_Clock;
    $ac->dn_get_analog_clock();
}
?>