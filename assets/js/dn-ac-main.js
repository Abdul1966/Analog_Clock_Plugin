
class AnalogClock{




    constructor(){

    }

    createCircle(radius){
        let mySVG = document.getElementById("svgClock");
        let svgNS = "http://www.w3.org/2000/svg";
      
        let myCircle = document.createElementNS(svgNS,"circle"); //to create a circle. for rectangle use "rectangle"
        myCircle.setAttributeNS(null,"id","mycircle");
        myCircle.setAttributeNS(null,"cx",100);
        myCircle.setAttributeNS(null,"cy",100);
        myCircle.setAttributeNS(null,"r",radius);
        myCircle.setAttributeNS(null,"fill","none");
        myCircle.setAttributeNS(null,"stroke","black");
        myCircle.setAttributeNS(null,"stroke-width","3");
        mySVG.appendChild(myCircle);
    }

//----------------------------------------------------------------------------------------------------------------------

    secondsHand(){  

        jQuery("#secondsLine").remove();
        let mySVG = document.getElementById("svgClock");
        let svgNS = "http://www.w3.org/2000/svg";
        let x = new Date();
        let cSeconds=x.getSeconds();
        let myLine= document.createElementNS(svgNS,"line"); //to create a circle. for rectangle use "rectangle"

       myLine.setAttributeNS(null,"id","secondsLine");
       myLine.setAttributeNS(null,"x1",100);
       myLine.setAttributeNS(null,"y1",100);
       myLine.setAttributeNS(null,"stroke","black");
       myLine.setAttributeNS(null,"stroke-width","1");  

        switch (cSeconds){        
            case 0:
            myLine.setAttributeNS(null,"x2",100);
            myLine.setAttributeNS(null,"y2",2);
            mySVG.appendChild(myLine);
            break;
        
            case 1:
            myLine.setAttributeNS(null,"x2",110);
            myLine.setAttributeNS(null,"y2",3);
            mySVG.appendChild(myLine);
            break;
        
            case 2:
            myLine.setAttributeNS(null,"x2",120);
            myLine.setAttributeNS(null,"y2",5);
            mySVG.appendChild(myLine);
            break;
        
            case 3:
            myLine.setAttributeNS(null,"x2",130);
            myLine.setAttributeNS(null,"y2",7);
            mySVG.appendChild(myLine);
            break;
        
            case 4:
            myLine.setAttributeNS(null,"x2",140);
            myLine.setAttributeNS(null,"y2",10);
            mySVG.appendChild(myLine);
            break;
        
            case 5:
            myLine.setAttributeNS(null,"x2",148);
            myLine.setAttributeNS(null,"y2",16);
            mySVG.appendChild(myLine);
            break;
        
            case 6:
            myLine.setAttributeNS(null,"x2",159);
            myLine.setAttributeNS(null,"y2",22);
            mySVG.appendChild(myLine);
            break;
        
            case 7:
            myLine.setAttributeNS(null,"x2",166);
            myLine.setAttributeNS(null,"y2",28);
            mySVG.appendChild(myLine);
            break;
        
            case 8:
           myLine.setAttributeNS(null,"x2",172);
           myLine.setAttributeNS(null,"y2",34);
            mySVG.appendChild(myLine);
            break;
        
            case 9:
           myLine.setAttributeNS(null,"x2",178);
           myLine.setAttributeNS(null,"y2",42);
            mySVG.appendChild(myLine);
            break;
        
            case 10:
           myLine.setAttributeNS(null,"x2",185);
           myLine.setAttributeNS(null,"y2",51);
            mySVG.appendChild(myLine);
            break;
        
            case 11:
           myLine.setAttributeNS(null,"x2",190);
           myLine.setAttributeNS(null,"y2",60);
            mySVG.appendChild(myLine);
            break;
        
            case 12:
           myLine.setAttributeNS(null,"x2",193);
           myLine.setAttributeNS(null,"y2",69);
            mySVG.appendChild(myLine);
            break;
        
            case 13:
           myLine.setAttributeNS(null,"x2",195);
           myLine.setAttributeNS(null,"y2",78);
            mySVG.appendChild(myLine);
            break;
        
            case 13:
           myLine.setAttributeNS(null,"x2",197);
           myLine.setAttributeNS(null,"y2",91);
            mySVG.appendChild(myLine);
            break;
        
            case 14:
           myLine.setAttributeNS(null,"x2",197);
           myLine.setAttributeNS(null,"y2",89);
            mySVG.appendChild(myLine);
            break;
        
            case 15:
           myLine.setAttributeNS(null,"x2",198);
           myLine.setAttributeNS(null,"y2",100);
            mySVG.appendChild(myLine);
            break;
        
            case 16:
           myLine.setAttributeNS(null,"x2",197);
           myLine.setAttributeNS(null,"y2",111);
            mySVG.appendChild(myLine);
            break;
        
            case 17:
           myLine.setAttributeNS(null,"x2",196);
           myLine.setAttributeNS(null,"y2",120);
            mySVG.appendChild(myLine);
            break;
        
            case 18:
           myLine.setAttributeNS(null,"x2",193);
           myLine.setAttributeNS(null,"y2",130);
            mySVG.appendChild(myLine);
            break;
        
            case 19:
           myLine.setAttributeNS(null,"x2",189);
           myLine.setAttributeNS(null,"y2",140);
            mySVG.appendChild(myLine);
            break;
        
            case 20:
           myLine.setAttributeNS(null,"x2",185);
           myLine.setAttributeNS(null,"y2",149);
            mySVG.appendChild(myLine);
            break;
        
            case 21:
           myLine.setAttributeNS(null,"x2",178);
           myLine.setAttributeNS(null,"y2",159);
            mySVG.appendChild(myLine);
            break;
        
            case 22:
           myLine.setAttributeNS(null,"x2",172);
           myLine.setAttributeNS(null,"y2",166);
            mySVG.appendChild(myLine);
            break;
        
            case 23:
           myLine.setAttributeNS(null,"x2",166);
           myLine.setAttributeNS(null,"y2",173);
            mySVG.appendChild(myLine);
            break;
        
            case 24:
           myLine.setAttributeNS(null,"x2",159);
           myLine.setAttributeNS(null,"y2",179);
            mySVG.appendChild(myLine);
            break;
        
            case 25:
           myLine.setAttributeNS(null,"x2",150);
           myLine.setAttributeNS(null,"y2",185);
            mySVG.appendChild(myLine);
            break;
        
            case 26:
           myLine.setAttributeNS(null,"x2",138);
           myLine.setAttributeNS(null,"y2",190);
            mySVG.appendChild(myLine);
            break;
        
            case 27:
           myLine.setAttributeNS(null,"x2",128);
           myLine.setAttributeNS(null,"y2",194);
            mySVG.appendChild(myLine);
            break;
        
            case 28:
           myLine.setAttributeNS(null,"x2",120);
           myLine.setAttributeNS(null,"y2",196);
            mySVG.appendChild(myLine);
            break;
        
            case 29:
           myLine.setAttributeNS(null,"x2",112);
           myLine.setAttributeNS(null,"y2",197);
            mySVG.appendChild(myLine);
            break;
        
            case 30:
           myLine.setAttributeNS(null,"x2",100);
           myLine.setAttributeNS(null,"y2",198);
            mySVG.appendChild(myLine);
            break;
        
            case 31:
           myLine.setAttributeNS(null,"x2",89);
           myLine.setAttributeNS(null,"y2",197);
            mySVG.appendChild(myLine);
            break;
        
            case 32:
           myLine.setAttributeNS(null,"x2",81);
           myLine.setAttributeNS(null,"y2",196);
            mySVG.appendChild(myLine);
            break;
        
            case 33:
           myLine.setAttributeNS(null,"x2",71);
           myLine.setAttributeNS(null,"y2",193);
            mySVG.appendChild(myLine);
            break;
        
            case 34:
           myLine.setAttributeNS(null,"x2",61);
           myLine.setAttributeNS(null,"y2",190);
            mySVG.appendChild(myLine);
            break;
        
            case 35:
           myLine.setAttributeNS(null,"x2",51);
           myLine.setAttributeNS(null,"y2",185);
            mySVG.appendChild(myLine);
            break;
        
            case 36:
           myLine.setAttributeNS(null,"x2",43);
           myLine.setAttributeNS(null,"y2",179);
            mySVG.appendChild(myLine);
            break;
        
            case 37:
           myLine.setAttributeNS(null,"x2",36);
           myLine.setAttributeNS(null,"y2",174);
            mySVG.appendChild(myLine);
            break;
        
            case 38:
           myLine.setAttributeNS(null,"x2",30);
           myLine.setAttributeNS(null,"y2",168);
            mySVG.appendChild(myLine);
            break;
        
            case 39:
           myLine.setAttributeNS(null,"x2",22);
           myLine.setAttributeNS(null,"y2",159);
            mySVG.appendChild(myLine);
            break;
        
            case 40:
           myLine.setAttributeNS(null,"x2",15);
           myLine.setAttributeNS(null,"y2",150);
            mySVG.appendChild(myLine);
            break;
        
            case 41:
           myLine.setAttributeNS(null,"x2",11);
           myLine.setAttributeNS(null,"y2",140);
            mySVG.appendChild(myLine);
            break;
        
            case 42:
           myLine.setAttributeNS(null,"x2",7);
           myLine.setAttributeNS(null,"y2",130);
            mySVG.appendChild(myLine);
            break;
        
            case 43:
           myLine.setAttributeNS(null,"x2",4);
           myLine.setAttributeNS(null,"y2",120);
            mySVG.appendChild(myLine);
            break;
        
            case 44:
           myLine.setAttributeNS(null,"x2",3);
           myLine.setAttributeNS(null,"y2",110);
            mySVG.appendChild(myLine);
            break;
        
            case 45:
           myLine.setAttributeNS(null,"x2",3);
           myLine.setAttributeNS(null,"y2",100);
            mySVG.appendChild(myLine);
            break;
        
            case 46:
           myLine.setAttributeNS(null,"x2",2);
           myLine.setAttributeNS(null,"y2",90);
            mySVG.appendChild(myLine);
            break;
        
            case 47:
           myLine.setAttributeNS(null,"x2",4);
           myLine.setAttributeNS(null,"y2",80);
            mySVG.appendChild(myLine);
            break;
        
            case 48:
           myLine.setAttributeNS(null,"x2",7);
           myLine.setAttributeNS(null,"y2",71);
            mySVG.appendChild(myLine);
            break;
        
            case 49:
           myLine.setAttributeNS(null,"x2",11);
           myLine.setAttributeNS(null,"y2",61);
            mySVG.appendChild(myLine);
            break;
        
            case 50:
           myLine.setAttributeNS(null,"x2",16);
           myLine.setAttributeNS(null,"y2",51);
            mySVG.appendChild(myLine);
            break;
        
            case 51:
           myLine.setAttributeNS(null,"x2",21);
           myLine.setAttributeNS(null,"y2",44);
            mySVG.appendChild(myLine);
            break;
        
            case 52:
           myLine.setAttributeNS(null,"x2",26);
           myLine.setAttributeNS(null,"y2",37);
            mySVG.appendChild(myLine);
            break;
        
            case 53:
           myLine.setAttributeNS(null,"x2",32);
           myLine.setAttributeNS(null,"y2",30);
            mySVG.appendChild(myLine);
            break;
        
            case 54:
           myLine.setAttributeNS(null,"x2",39);
           myLine.setAttributeNS(null,"y2",24);
            mySVG.appendChild(myLine);
            break;
        
            case 55:
           myLine.setAttributeNS(null,"x2",47);
           myLine.setAttributeNS(null,"y2",18);
            mySVG.appendChild(myLine);
            break;
        
            case 56:
           myLine.setAttributeNS(null,"x2",58);
           myLine.setAttributeNS(null,"y2",13);
            mySVG.appendChild(myLine);
            break;
        
            case 57:
           myLine.setAttributeNS(null,"x2",66);
           myLine.setAttributeNS(null,"y2",9);
            mySVG.appendChild(myLine);
            break;
        
            case 58:
           myLine.setAttributeNS(null,"x2",76);
           myLine.setAttributeNS(null,"y2",6);
            mySVG.appendChild(myLine);
            break;
        
            case 59:
           myLine.setAttributeNS(null,"x2",87);
           myLine.setAttributeNS(null,"y2",3);
            mySVG.appendChild(myLine);
            break;
        
        }

    }


     minutesHand(){
        let mySVG = document.getElementById("svgClock");
        let svgNS = "http://www.w3.org/2000/svg";
        let x = new Date();
        let cMinutes=x.getMinutes();
        jQuery("#minutesHand").remove();
        let myLine = document.createElementNS(svgNS,"line"); //to create a circle. for rectangle use "rectangle"
        myLine.setAttributeNS(null,"id","minutesHand");
        myLine.setAttributeNS(null,"x1",100);
        myLine.setAttributeNS(null,"y1",100);
        myLine.setAttributeNS(null,"stroke","black");
        myLine.setAttributeNS(null,"stroke-width","3");
    
        switch (cMinutes){
          case 0:
          myLine.setAttributeNS(null,"x2",100);
          myLine.setAttributeNS(null,"y2",23);
          mySVG.appendChild(myLine);
          break;
    
          case 1:
          myLine.setAttributeNS(null,"x2",108);
          myLine.setAttributeNS(null,"y2",23);
          mySVG.appendChild(myLine);
          break;
    
          case 2:
          myLine.setAttributeNS(null,"x2",116);
          myLine.setAttributeNS(null,"y2",24);
          mySVG.appendChild(myLine);
          break;
    
          case 3:
          myLine.setAttributeNS(null,"x2",124);
          myLine.setAttributeNS(null,"y2",26);
          mySVG.appendChild(myLine);
          break;
    
          case 4:
          myLine.setAttributeNS(null,"x2",132);
          myLine.setAttributeNS(null,"y2",29);
          mySVG.appendChild(myLine);
          break;
    
          case 5:
          myLine.setAttributeNS(null,"x2",139);
          myLine.setAttributeNS(null,"y2",32);
          mySVG.appendChild(myLine);
          break;
    
          case 6:
          myLine.setAttributeNS(null,"x2",146);
          myLine.setAttributeNS(null,"y2",37);
          mySVG.appendChild(myLine);
          break;
    
          case 7:
          myLine.setAttributeNS(null,"x2",153);
          myLine.setAttributeNS(null,"y2",43);
          mySVG.appendChild(myLine);
          break;
    
          case 8:
          myLine.setAttributeNS(null,"x2",158);
          myLine.setAttributeNS(null,"y2",48);
          mySVG.appendChild(myLine);
          break;
    
          case 9:
          myLine.setAttributeNS(null,"x2",163);
          myLine.setAttributeNS(null,"y2",55);
          mySVG.appendChild(myLine);
          break;
    
          case 10:
          myLine.setAttributeNS(null,"x2",167);
          myLine.setAttributeNS(null,"y2",62);
          mySVG.appendChild(myLine);
          break;
    
          case 11:
          myLine.setAttributeNS(null,"x2",172);
          myLine.setAttributeNS(null,"y2",70);
          mySVG.appendChild(myLine);
          break;
    
          case 12:
          myLine.setAttributeNS(null,"x2",174);
          myLine.setAttributeNS(null,"y2",77);
          mySVG.appendChild(myLine);
          break;
    
          case 13:
          myLine.setAttributeNS(null,"x2",176);
          myLine.setAttributeNS(null,"y2",84);
          mySVG.appendChild(myLine);
          break;
    
          case 14:
          myLine.setAttributeNS(null,"x2",177);
          myLine.setAttributeNS(null,"y2",92);
          mySVG.appendChild(myLine);
          break;
    
          case 15:
          myLine.setAttributeNS(null,"x2",178);
          myLine.setAttributeNS(null,"y2",100);
          mySVG.appendChild(myLine);
          break;
    
          case 16:
          myLine.setAttributeNS(null,"x2",177);
          myLine.setAttributeNS(null,"y2",109);
          mySVG.appendChild(myLine);
          break;
    
          case 17:
          myLine.setAttributeNS(null,"x2",175);
          myLine.setAttributeNS(null,"y2",118);
          mySVG.appendChild(myLine);
          break;
    
          case 18:
          myLine.setAttributeNS(null,"x2",173);
          myLine.setAttributeNS(null,"y2",126);
          mySVG.appendChild(myLine);
          break;
    
          case 19:
          myLine.setAttributeNS(null,"x2",171);
          myLine.setAttributeNS(null,"y2",132);
          mySVG.appendChild(myLine);
          break;
    
          case 20:
          myLine.setAttributeNS(null,"x2",168);
          myLine.setAttributeNS(null,"y2",139);
          mySVG.appendChild(myLine);
          break;
    
          case 21:
          myLine.setAttributeNS(null,"x2",163);
          myLine.setAttributeNS(null,"y2",145);
          mySVG.appendChild(myLine);
          break;
    
          case 22:
          myLine.setAttributeNS(null,"x2",158);
          myLine.setAttributeNS(null,"y2",151);
          mySVG.appendChild(myLine);
          break;
    
          case 23:
          myLine.setAttributeNS(null,"x2",153);
          myLine.setAttributeNS(null,"y2",156);
          mySVG.appendChild(myLine);
          break;
    
          case 24:
          myLine.setAttributeNS(null,"x2",147);
          myLine.setAttributeNS(null,"y2",162);
          mySVG.appendChild(myLine);
          break;
    
          case 25:
          myLine.setAttributeNS(null,"x2",139);
          myLine.setAttributeNS(null,"y2",168);
          mySVG.appendChild(myLine);
          break;
    
          case 26:
          myLine.setAttributeNS(null,"x2",132);
          myLine.setAttributeNS(null,"y2",171);
          mySVG.appendChild(myLine);
          break;
    
          case 27:
          myLine.setAttributeNS(null,"x2",125);
          myLine.setAttributeNS(null,"y2",174);
          mySVG.appendChild(myLine);
          break;
    
          case 28:
          myLine.setAttributeNS(null,"x2",118);
          myLine.setAttributeNS(null,"y2",176);
          mySVG.appendChild(myLine);
          break;
    
          case 29:
          myLine.setAttributeNS(null,"x2",110);
          myLine.setAttributeNS(null,"y2",177);
          mySVG.appendChild(myLine);
          break;
    
          case 30:
          myLine.setAttributeNS(null,"x2",100);
          myLine.setAttributeNS(null,"y2",178);
          mySVG.appendChild(myLine);
          break;
    
          case 31:
          myLine.setAttributeNS(null,"x2",92);
          myLine.setAttributeNS(null,"y2",177);
          mySVG.appendChild(myLine);
          break;
    
          case 32:
          myLine.setAttributeNS(null,"x2",84);
          myLine.setAttributeNS(null,"y2",176);
          mySVG.appendChild(myLine);
          break;
    
          case 33:
          myLine.setAttributeNS(null,"x2",76);
          myLine.setAttributeNS(null,"y2",174);
          mySVG.appendChild(myLine);
          break;
    
          case 34:
          myLine.setAttributeNS(null,"x2",69);
          myLine.setAttributeNS(null,"y2",171);
          mySVG.appendChild(myLine);
          break;
    
          case 35:
          myLine.setAttributeNS(null,"x2",62);
          myLine.setAttributeNS(null,"y2",168);
          mySVG.appendChild(myLine);
          break;
    
          case 36:
          myLine.setAttributeNS(null,"x2",55);
          myLine.setAttributeNS(null,"y2",163);
          mySVG.appendChild(myLine);
          break;
    
          case 37:
          myLine.setAttributeNS(null,"x2",49);
          myLine.setAttributeNS(null,"y2",159);
          mySVG.appendChild(myLine);
          break;
    
          case 38:
          myLine.setAttributeNS(null,"x2",43);
          myLine.setAttributeNS(null,"y2",153);
          mySVG.appendChild(myLine);
          break;
    
          case 39:
          myLine.setAttributeNS(null,"x2",37);
          myLine.setAttributeNS(null,"y2",146);
          mySVG.appendChild(myLine);
          break;
    
          case 40:
          myLine.setAttributeNS(null,"x2",33);
          myLine.setAttributeNS(null,"y2",139);
          mySVG.appendChild(myLine);
          break;
    
          case 41:
          myLine.setAttributeNS(null,"x2",30);
          myLine.setAttributeNS(null,"y2",132);
          mySVG.appendChild(myLine);
          break;
    
          case 42:
          myLine.setAttributeNS(null,"x2",27);
          myLine.setAttributeNS(null,"y2",124);
          mySVG.appendChild(myLine);
          break;
    
          case 43:
          myLine.setAttributeNS(null,"x2",25);
          myLine.setAttributeNS(null,"y2",117);
          mySVG.appendChild(myLine);
          break;
    
          case 44:
          myLine.setAttributeNS(null,"x2",23);
          myLine.setAttributeNS(null,"y2",108);
          mySVG.appendChild(myLine);
          break;
    
          case 45:
          myLine.setAttributeNS(null,"x2",22);
          myLine.setAttributeNS(null,"y2",100);
          mySVG.appendChild(myLine);
          break;
    
          case 46:
          myLine.setAttributeNS(null,"x2",23);
          myLine.setAttributeNS(null,"y2",92);
          mySVG.appendChild(myLine);
          break;
    
          case 47:
          myLine.setAttributeNS(null,"x2",24);
          myLine.setAttributeNS(null,"y2",84);
          mySVG.appendChild(myLine);
          break;
    
          case 48:
          myLine.setAttributeNS(null,"x2",26);
          myLine.setAttributeNS(null,"y2",77);
          mySVG.appendChild(myLine);
          break;
    
          case 49:
          myLine.setAttributeNS(null,"x2",29);
          myLine.setAttributeNS(null,"y2",69);
          mySVG.appendChild(myLine);
          break;
    
          case 50:
          myLine.setAttributeNS(null,"x2",32);
          myLine.setAttributeNS(null,"y2",61);
          mySVG.appendChild(myLine);
          break;
    
          case 51:
          myLine.setAttributeNS(null,"x2",37);
          myLine.setAttributeNS(null,"y2",56);
          mySVG.appendChild(myLine);
          break;
    
          case 52:
          myLine.setAttributeNS(null,"x2",40);
          myLine.setAttributeNS(null,"y2",51);
          mySVG.appendChild(myLine);
          break;
    
          case 53:
          myLine.setAttributeNS(null,"x2",45);
          myLine.setAttributeNS(null,"y2",46);
          mySVG.appendChild(myLine);
          break;
    
          case 54:
          myLine.setAttributeNS(null,"x2",51);
          myLine.setAttributeNS(null,"y2",41);
          mySVG.appendChild(myLine);
          break;
    
          case 55:
          myLine.setAttributeNS(null,"x2",58);
          myLine.setAttributeNS(null,"y2",34);
          mySVG.appendChild(myLine);
          break;
    
          case 56:
          myLine.setAttributeNS(null,"x2",65);
          myLine.setAttributeNS(null,"y2",31);
          mySVG.appendChild(myLine);
          break;
    
          case 57:
          myLine.setAttributeNS(null,"x2",72);
          myLine.setAttributeNS(null,"y2",28);
          mySVG.appendChild(myLine);
          break;
    
          case 58:
          myLine.setAttributeNS(null,"x2",81);
          myLine.setAttributeNS(null,"y2",26);
          mySVG.appendChild(myLine);
          break;
    
          case 59:
          myLine.setAttributeNS(null,"x2",90);
          myLine.setAttributeNS(null,"y2",24);
          mySVG.appendChild(myLine);
          break;
    
        }
    
    
     }


     hoursHand(){
        let mySVG = document.getElementById("svgClock");
        let svgNS = "http://www.w3.org/2000/svg";

        let x =new Date();
        let y;
        let cMinutes = x.getMinutes();
        let cHours = x.getHours();
  
       if (cHours>=12){
         cHours=cHours-12;
       }
  
       if(cHours==12 || cHours==24){
         cHours=0;
       }
        y=cHours*60+cMinutes;
  
       jQuery("#hoursHand").remove();
        var myLine = document.createElementNS(svgNS,"line"); //to create a circle. for rectangle use "rectangle"
        myLine.setAttributeNS(null,"id","hoursHand");
        myLine.setAttributeNS(null,"x1",100);
        myLine.setAttributeNS(null,"y1",100);
        myLine.setAttributeNS(null,"stroke","black");
        myLine.setAttributeNS(null,"stroke-width","3");
  
        if (y>=0 && y<12){
          y=0;
        }
        if (y>=12 && y<24){
          y=12;
        }
        if (y>=24&& y<36){
          y=24;
        }
        if (y>=36 && y<48){
          y=36;
        }
        if (y>=48 && y<60){
          y=48;
        }
        if (y>=60 && y<72){
          y=60;
        }
  
        if (y>=72 && y<84){
          y=72;
        }
        if (y>=84 && y<96){
          y=84;
        }
        if (y>=96 && y<108){
          y=96;
        }
  
        if (y>=108 && y<120){
          y=108;
        }
  
        if (y>=120 && y<132){
          y=120;
        }
        if (y>=132 && y<144){
          y=132;
        }
        if (y>=144 && y<156){
          y=144;
        }
        if (y>=156 && y<168){
          y=156;
        }
        if (y>=168 && y<180){
          y=168;
        }
  
        if (y>=180 && y<192){
          y=180;
        }
  
        if (y>=192 && y<204){
          y=192;
        }
  
        if (y>=204 && y<216){
          y=204;
        }
  
        if (y>=216 && y<228){
          y=216;
        }
        if (y>=228 && y<240){
          y=228;
        }
        if (y>=240 && y<252){
          y=240;
        }
        if (y>=252 && y<264){
          y=252;
        }
        if (y>=264 && y<276){
          y=264;
        }
        if (y>=276 && y<288){
          y=276;
        }
        if (y>=288 && y<300){
          y=288;
        }
        if (y>=300 && y<312){
          y=300;
        }
        if (y>=312 && y<324){
          y=312;
        }
        if (y>=324 && y<336){
          y=324;
        }
        if (y>=336 && y<348){
          y=336;
        }
        if (y>=348 && y<360){
          y=348;
        }
        if (y>=360 && y<372){
          y=360;
        }
        if (y>=372 && y<384){
          y=372;
        }
        if (y>=384 && y<396){
          y=384;
        }
        if (y>=396 && y<408){
          y=396;
        }
        if (y>=408 && y<420){
          y=408;
        }
        if (y>=420 && y<432){
          y=420;
        }
        if (y>=432 && y<444){
          y=432;
        }
        if (y>=444 && y<456){
          y=444;
        }
        if (y>=456 && y<468){
          y=456;
        }
        if (y>=468 && y<480){
          y=468;
        }
        if (y>=480 && y<492){
          y=480;
        }
        if (y>=492 && y<504){
          y=492;
        }
        if (y>=504 && y<516){
          y=504;
        }
        if (y>=516 && y<528){
          y=516;
        }
        if (y>=528 && y<540){
          y=528;
        }
        if (y>=540 && y<552){
          y=540;
        }
        if (y>=552 && y<564){
          y=552;
        }
        if (y>=564 && y<576){
          y=564;
        }
        if (y>=576 && y<588){
          y=576;
        }
        if (y>=588 && y<600){
          y=588;
        }
  
        if (y>=600 && y<612){
          y=600;
        }
  
        if (y>=612 && y<624){
          y=612;
        }
        if (y>=624 && y<636){
          y=624;
        }
  
        if (y>=636 && y<648){
          y=636;
        }
        if (y>=648 && y<660){
          y=648;
        }
  
        if (y>=660 && y<672){
          y=660;
        }
  
        if (y>=672 && y<684){
          y=672;
        }
        if (y>=684 && y<696){
          y=684;
        }
        if (y>=696 && y<708){
          y=696;
        }
  
        if (y>=708 && y<720){
          y=708;
        }
  
        switch (y){
          case 0:
          myLine.setAttributeNS(null,"x2",100);
          myLine.setAttributeNS(null,"y2",42);
          mySVG.appendChild(myLine);
          break;
  
          case 12:
          myLine.setAttributeNS(null,"x2",106);
          myLine.setAttributeNS(null,"y2",43);
          mySVG.appendChild(myLine);
          break;
  
          case 24:
          myLine.setAttributeNS(null,"x2",113);
          myLine.setAttributeNS(null,"y2",44);
          mySVG.appendChild(myLine);
          break;
  
          case 36:
          myLine.setAttributeNS(null,"x2",118);
          myLine.setAttributeNS(null,"y2",46);
          mySVG.appendChild(myLine);
          break;
  
          case 48:
          myLine.setAttributeNS(null,"x2",124);
          myLine.setAttributeNS(null,"y2",48);
          mySVG.appendChild(myLine);
          break;
  
          case 60:
          myLine.setAttributeNS(null,"x2",130);
          myLine.setAttributeNS(null,"y2",50);
          mySVG.appendChild(myLine);
          break;
  
          case 72:
          myLine.setAttributeNS(null,"x2",135);
          myLine.setAttributeNS(null,"y2",54);
          mySVG.appendChild(myLine);
          break;
  
          case 84:
          myLine.setAttributeNS(null,"x2",140);
          myLine.setAttributeNS(null,"y2",58);
          mySVG.appendChild(myLine);
          break;
  
          case 96:
          myLine.setAttributeNS(null,"x2",144);
          myLine.setAttributeNS(null,"y2",62);
          mySVG.appendChild(myLine);
          break;
  
          case 108:
          myLine.setAttributeNS(null,"x2",148);
          myLine.setAttributeNS(null,"y2",68);
          mySVG.appendChild(myLine);
          break;
  
          case 120:
          myLine.setAttributeNS(null,"x2",151);
          myLine.setAttributeNS(null,"y2",72);
          mySVG.appendChild(myLine);
          break;
  
          case 132:
          myLine.setAttributeNS(null,"x2",154);
          myLine.setAttributeNS(null,"y2",78);
          mySVG.appendChild(myLine);
          break;
  
          case 144:
          myLine.setAttributeNS(null,"x2",156);
          myLine.setAttributeNS(null,"y2",83);
          mySVG.appendChild(myLine);
          break;
  
          case 156:
          myLine.setAttributeNS(null,"x2",157);
          myLine.setAttributeNS(null,"y2",89);
          mySVG.appendChild(myLine);
          break;
  
          case 168:
          myLine.setAttributeNS(null,"x2",158);
          myLine.setAttributeNS(null,"y2",95);
          mySVG.appendChild(myLine);
          break;
  
          case 180:
          myLine.setAttributeNS(null,"x2",158);
          myLine.setAttributeNS(null,"y2",100);
          mySVG.appendChild(myLine);
          break;
  
          case 192:
          myLine.setAttributeNS(null,"x2",157);
          myLine.setAttributeNS(null,"y2",107);
          mySVG.appendChild(myLine);
          break;
  
          case 204:
          myLine.setAttributeNS(null,"x2",156);
          myLine.setAttributeNS(null,"y2",114);
          mySVG.appendChild(myLine);
          break;
  
          case 216:
          myLine.setAttributeNS(null,"x2",155);
          myLine.setAttributeNS(null,"y2",120);
          mySVG.appendChild(myLine);
          break;
  
          case 228:
          myLine.setAttributeNS(null,"x2",153);
          myLine.setAttributeNS(null,"y2",123);
          mySVG.appendChild(myLine);
          break;
  
          case 240:
          myLine.setAttributeNS(null,"x2",150);
          myLine.setAttributeNS(null,"y2",129);
          mySVG.appendChild(myLine);
          break;
  
          case 252:
          myLine.setAttributeNS(null,"x2",147);
          myLine.setAttributeNS(null,"y2",134);
          mySVG.appendChild(myLine);
          break;
  
          case 264:
          myLine.setAttributeNS(null,"x2",144);
          myLine.setAttributeNS(null,"y2",139);
          mySVG.appendChild(myLine);
          break;
  
          case 276:
          myLine.setAttributeNS(null,"x2",140);
          myLine.setAttributeNS(null,"y2",143);
          mySVG.appendChild(myLine);
          break;
  
          case 288:
          myLine.setAttributeNS(null,"x2",135);
          myLine.setAttributeNS(null,"y2",147);
          mySVG.appendChild(myLine);
          break;
  
          case 300:
          myLine.setAttributeNS(null,"x2",129);
          myLine.setAttributeNS(null,"y2",150);
          mySVG.appendChild(myLine);
          break;
  
          case 312:
          myLine.setAttributeNS(null,"x2",125);
          myLine.setAttributeNS(null,"y2",153);
          mySVG.appendChild(myLine);
          break;
  
          case 324:
          myLine.setAttributeNS(null,"x2",119);
          myLine.setAttributeNS(null,"y2",155);
          mySVG.appendChild(myLine);
          break;
  
          case 336:
          myLine.setAttributeNS(null,"x2",114);
          myLine.setAttributeNS(null,"y2",156);
          mySVG.appendChild(myLine);
          break;
  
          case 348:
          myLine.setAttributeNS(null,"x2",108);
          myLine.setAttributeNS(null,"y2",157);
          mySVG.appendChild(myLine);
          break;
  
          case 360:
          myLine.setAttributeNS(null,"x2",100);
          myLine.setAttributeNS(null,"y2",158);
          mySVG.appendChild(myLine);
          break;
  
          case 372:
          myLine.setAttributeNS(null,"x2",94);
          myLine.setAttributeNS(null,"y2",158);
          mySVG.appendChild(myLine);
          break;
  
          case 384:
          myLine.setAttributeNS(null,"x2",89);
          myLine.setAttributeNS(null,"y2",157);
          mySVG.appendChild(myLine);
          break;
  
          case 396:
          myLine.setAttributeNS(null,"x2",82);
          myLine.setAttributeNS(null,"y2",155);
          mySVG.appendChild(myLine);
          break;
  
          case 408:
          myLine.setAttributeNS(null,"x2",77);
          myLine.setAttributeNS(null,"y2",154);
          mySVG.appendChild(myLine);
          break;
  
          case 420:
          myLine.setAttributeNS(null,"x2",72);
          myLine.setAttributeNS(null,"y2",151);
          mySVG.appendChild(myLine);
          break;
  
          case 432:
          myLine.setAttributeNS(null,"x2",67);
          myLine.setAttributeNS(null,"y2",147);
          mySVG.appendChild(myLine);
          break;
  
          case 444:
          myLine.setAttributeNS(null,"x2",62);
          myLine.setAttributeNS(null,"y2",144);
          mySVG.appendChild(myLine);
          break;
  
          case 456:
          myLine.setAttributeNS(null,"x2",58);
          myLine.setAttributeNS(null,"y2",140);
          mySVG.appendChild(myLine);
          break;
  
          case 468:
          myLine.setAttributeNS(null,"x2",53);
          myLine.setAttributeNS(null,"y2",135);
          mySVG.appendChild(myLine);
          break;
  
          case 480:
          myLine.setAttributeNS(null,"x2",50);
          myLine.setAttributeNS(null,"y2",130);
          mySVG.appendChild(myLine);
          break;
  
          case 492:
          myLine.setAttributeNS(null,"x2",48);
          myLine.setAttributeNS(null,"y2",125);
          mySVG.appendChild(myLine);
          break;
  
          case 504:
          myLine.setAttributeNS(null,"x2",45);
          myLine.setAttributeNS(null,"y2",119);
          mySVG.appendChild(myLine);
          break;
  
          case 516:
          myLine.setAttributeNS(null,"x2",44);
          myLine.setAttributeNS(null,"y2",114);
          mySVG.appendChild(myLine);
          break;
  
          case 528:
          myLine.setAttributeNS(null,"x2",42);
          myLine.setAttributeNS(null,"y2",107);
          mySVG.appendChild(myLine);
          break;
  
          case 540:
          myLine.setAttributeNS(null,"x2",42);
          myLine.setAttributeNS(null,"y2",100);
          mySVG.appendChild(myLine);
          break;
  
          case 552:
          myLine.setAttributeNS(null,"x2",42);
          myLine.setAttributeNS(null,"y2",95);
          mySVG.appendChild(myLine);
          break;
  
          case 564:
          myLine.setAttributeNS(null,"x2",43);
          myLine.setAttributeNS(null,"y2",89);
          mySVG.appendChild(myLine);
          break;
  
          case 576:
          myLine.setAttributeNS(null,"x2",45);
          myLine.setAttributeNS(null,"y2",83);
          mySVG.appendChild(myLine);
          break;
  
          case 588:
          myLine.setAttributeNS(null,"x2",47);
          myLine.setAttributeNS(null,"y2",77);
          mySVG.appendChild(myLine);
          break;
  
          case 600:
          myLine.setAttributeNS(null,"x2",50);
          myLine.setAttributeNS(null,"y2",72);
          mySVG.appendChild(myLine);
          break;
  
          case 612:
          myLine.setAttributeNS(null,"x2",53);
          myLine.setAttributeNS(null,"y2",67);
          mySVG.appendChild(myLine);
          break;
  
          case 624:
          myLine.setAttributeNS(null,"x2",56);
          myLine.setAttributeNS(null,"y2",63);
          mySVG.appendChild(myLine);
          break;
  
          case 636:
          myLine.setAttributeNS(null,"x2",60);
          myLine.setAttributeNS(null,"y2",59);
          mySVG.appendChild(myLine);
          break;
  
          case 648:
          myLine.setAttributeNS(null,"x2",64);
          myLine.setAttributeNS(null,"y2",55);
          mySVG.appendChild(myLine);
          break;
  
          case 660:
          myLine.setAttributeNS(null,"x2",69);
          myLine.setAttributeNS(null,"y2",52);
          mySVG.appendChild(myLine);
          break;
  
          case 672:
          myLine.setAttributeNS(null,"x2",74);
          myLine.setAttributeNS(null,"y2",49);
          mySVG.appendChild(myLine);
          break;
  
          case 684:
          myLine.setAttributeNS(null,"x2",80);
          myLine.setAttributeNS(null,"y2",46);
          mySVG.appendChild(myLine);
          break;
  
          case 696:
          myLine.setAttributeNS(null,"x2",86);
          myLine.setAttributeNS(null,"y2",44);
          mySVG.appendChild(myLine);
          break;
  
          case 708:
          myLine.setAttributeNS(null,"x2",93);
          myLine.setAttributeNS(null,"y2",43);
          mySVG.appendChild(myLine);
          break;
  
        }
  
    }
  

    startClock(){
        this.createCircle(5);
        setInterval(this.secondsHand, 500);
        setInterval(this.minutesHand, 500);
        setInterval(this.hoursHand, 500);
    }  
}