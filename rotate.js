function rotate(section, direction) {
if(can_rotate==true){
if(section==1){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space0').className == 'occupied'){
                  occupied.push(2);
		}
		if(document.getElementById('space1').className == 'occupied'){
                  occupied.push(8);
		}
		if(document.getElementById('space2').className == 'occupied'){
                  occupied.push(14);
		}
		if(document.getElementById('space6').className == 'occupied'){
                  occupied.push(1);
		}
		if(document.getElementById('space7').className == 'occupied'){
                  occupied.push(7);
		}
		if(document.getElementById('space8').className == 'occupied'){
                  occupied.push(13);
		}
		if(document.getElementById('space12').className == 'occupied'){
                  occupied.push(0);
		}
		if(document.getElementById('space13').className == 'occupied'){
                  occupied.push(6);
		}
		if(document.getElementById('space14').className == 'occupied'){
                  occupied.push(12);
		}

                if(document.getElementById('space0').className == 'ai-occupied'){
                  aioccupied.push(2);
		}
		if(document.getElementById('space1').className == 'ai-occupied'){
                  aioccupied.push(8);
		}
		if(document.getElementById('space2').className == 'ai-occupied'){
                  aioccupied.push(14);
		}
		if(document.getElementById('space6').className == 'ai-occupied'){
                  aioccupied.push(1);
		}
		if(document.getElementById('space7').className == 'ai-occupied'){
                  aioccupied.push(7);
		}
		if(document.getElementById('space8').className == 'ai-occupied'){
                  aioccupied.push(13);
		}
		if(document.getElementById('space12').className == 'ai-occupied'){
                  aioccupied.push(0);
		}
		if(document.getElementById('space13').className == 'ai-occupied'){
                  aioccupied.push(6);
		}
		if(document.getElementById('space14').className == 'ai-occupied'){
                  aioccupied.push(12);
		}


                for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section1.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
               
		}
		}
		}

	   for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
                if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space0').className == 'occupied'){
                  aoccupied.push(12);
		}
		if(document.getElementById('space1').className == 'occupied'){
                  aoccupied.push(6);
		}
		if(document.getElementById('space2').className == 'occupied'){
                  aoccupied.push(0);
		}
		if(document.getElementById('space6').className == 'occupied'){
                  aoccupied.push(13);
		}
		if(document.getElementById('space7').className == 'occupied'){
                  aoccupied.push(7);
		}
		if(document.getElementById('space8').className == 'occupied'){
                  aoccupied.push(1);
		}
		if(document.getElementById('space12').className == 'occupied'){
                  aoccupied.push(14);
		}
		if(document.getElementById('space13').className == 'occupied'){
                  aoccupied.push(8);
		}
		if(document.getElementById('space14').className == 'occupied'){
                  aoccupied.push(2);
		}

if(document.getElementById('space0').className == 'ai-occupied'){
                  aioccupied.push(12);
		}
		if(document.getElementById('space1').className == 'ai-occupied'){
                  aioccupied.push(6);
		}
		if(document.getElementById('space2').className == 'ai-occupied'){
                  aioccupied.push(0);
		}
		if(document.getElementById('space6').className == 'ai-occupied'){
                  aioccupied.push(13);
		}
		if(document.getElementById('space7').className == 'ai-occupied'){
                  aioccupied.push(7);
		}
		if(document.getElementById('space8').className == 'ai-occupied'){
                  aioccupied.push(1);
		}
		if(document.getElementById('space12').className == 'ai-occupied'){
                  aioccupied.push(14);
		}
		if(document.getElementById('space13').className == 'ai-occupied'){
                  aioccupied.push(8);
		}
		if(document.getElementById('space14').className == 'ai-occupied'){
                  aioccupied.push(2);
		}

 for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section1.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
 if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}

else if(section==2){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space3').className == 'occupied'){
                  occupied.push(5);
		}
		if(document.getElementById('space4').className == 'occupied'){
                  occupied.push(11);
		}
		if(document.getElementById('space5').className == 'occupied'){
                  occupied.push(17);
		}
		if(document.getElementById('space9').className == 'occupied'){
                  occupied.push(4);
		}
		if(document.getElementById('space10').className == 'occupied'){
                  occupied.push(10);
		}
		if(document.getElementById('space11').className == 'occupied'){
                  occupied.push(16);
		}
		if(document.getElementById('space15').className == 'occupied'){
                  occupied.push(3);
		}
		if(document.getElementById('space16').className == 'occupied'){
                  occupied.push(9);
		}
		if(document.getElementById('space17').className == 'occupied'){
                  occupied.push(15);
		}

if(document.getElementById('space3').className == 'ai-occupied'){
                  aioccupied.push(5);
		}
		if(document.getElementById('space4').className == 'ai-occupied'){
                  aioccupied.push(11);
		}
		if(document.getElementById('space5').className == 'ai-occupied'){
                  aioccupied.push(17);
		}
		if(document.getElementById('space9').className == 'ai-occupied'){
                  aioccupied.push(4);
		}
		if(document.getElementById('space10').className == 'ai-occupied'){
                  aioccupied.push(10);
		}
		if(document.getElementById('space11').className == 'ai-occupied'){
                  aioccupied.push(16);
		}
		if(document.getElementById('space15').className == 'ai-occupied'){
                  aioccupied.push(3);
		}
		if(document.getElementById('space16').className == 'ai-occupied'){
                  aioccupied.push(9);
		}
		if(document.getElementById('space17').className == 'ai-occupied'){
                  aioccupied.push(15);
		}

                for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section2.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space3').className == 'occupied'){
                  aoccupied.push(15);
		}
		if(document.getElementById('space4').className == 'occupied'){
                  aoccupied.push(9);
		}
		if(document.getElementById('space5').className == 'occupied'){
                  aoccupied.push(3);
		}
		if(document.getElementById('space9').className == 'occupied'){
                  aoccupied.push(16);
		}
		if(document.getElementById('space10').className == 'occupied'){
                  aoccupied.push(10);
		}
		if(document.getElementById('space11').className == 'occupied'){
                  aoccupied.push(4);
		}
		if(document.getElementById('space15').className == 'occupied'){
                  aoccupied.push(17);
		}
		if(document.getElementById('space16').className == 'occupied'){
                  aoccupied.push(11);
		}
		if(document.getElementById('space17').className == 'occupied'){
                  aoccupied.push(5);
		}


if(document.getElementById('space3').className == 'ai-occupied'){
                  aioccupied.push(15);
		}
		if(document.getElementById('space4').className == 'ai-occupied'){
                  aioccupied.push(9);
		}
		if(document.getElementById('space5').className == 'ai-occupied'){
                  aioccupied.push(3);
		}
		if(document.getElementById('space9').className == 'ai-occupied'){
                  aioccupied.push(16);
		}
		if(document.getElementById('space10').className == 'ai-occupied'){
                  aioccupied.push(10);
		}
		if(document.getElementById('space11').className == 'ai-occupied'){
                  aioccupied.push(4);
		}
		if(document.getElementById('space15').className == 'ai-occupied'){
                  aioccupied.push(17);
		}
		if(document.getElementById('space16').className == 'ai-occupied'){
                  aioccupied.push(11);
		}
		if(document.getElementById('space17').className == 'ai-occupied'){
                  aioccupied.push(5);
		}

 for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section2.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}

else if(section==3){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space18').className == 'occupied'){
                  occupied.push(20);
		}
		if(document.getElementById('space19').className == 'occupied'){
                  occupied.push(26);
		}
		if(document.getElementById('space20').className == 'occupied'){
                  occupied.push(32);
		}
		if(document.getElementById('space24').className == 'occupied'){
                  occupied.push(19);
		}
		if(document.getElementById('space25').className == 'occupied'){
                  occupied.push(25);
		}
		if(document.getElementById('space26').className == 'occupied'){
                  occupied.push(31);
		}
		if(document.getElementById('space30').className == 'occupied'){
                  occupied.push(18);
		}
		if(document.getElementById('space31').className == 'occupied'){
                  occupied.push(24);
		}
		if(document.getElementById('space32').className == 'occupied'){
                  occupied.push(30);
		}

if(document.getElementById('space18').className == 'ai-occupied'){
                  aioccupied.push(20);
		}
		if(document.getElementById('space19').className == 'ai-occupied'){
                  aioccupied.push(26);
		}
		if(document.getElementById('space20').className == 'ai-occupied'){
                  aioccupied.push(32);
		}
		if(document.getElementById('space24').className == 'ai-occupied'){
                  aioccupied.push(19);
		}
		if(document.getElementById('space25').className == 'ai-occupied'){
                  aioccupied.push(25);
		}
		if(document.getElementById('space26').className == 'ai-occupied'){
                  aioccupied.push(31);
		}
		if(document.getElementById('space30').className == 'ai-occupied'){
                  aioccupied.push(18);
		}
		if(document.getElementById('space31').className == 'ai-occupied'){
                  aioccupied.push(24);
		}
		if(document.getElementById('space32').className == 'ai-occupied'){
                  aioccupied.push(30);
		}

                for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(occupied[i]!=j&&aioccupied[i]!=j){
			if(section3.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space18').className == 'occupied'){
                  aoccupied.push(30);
		}
		if(document.getElementById('space19').className == 'occupied'){
                  aoccupied.push(24);
		}
		if(document.getElementById('space20').className == 'occupied'){
                  aoccupied.push(18);
		}
		if(document.getElementById('space24').className == 'occupied'){
                  aoccupied.push(31);
		}
		if(document.getElementById('space25').className == 'occupied'){
                  aoccupied.push(25);
		}
		if(document.getElementById('space26').className == 'occupied'){
                  aoccupied.push(19);
		}
		if(document.getElementById('space30').className == 'occupied'){
                  aoccupied.push(32);
		}
		if(document.getElementById('space31').className == 'occupied'){
                  aoccupied.push(26);
		}
		if(document.getElementById('space32').className == 'occupied'){
                  aoccupied.push(20);
		}


if(document.getElementById('space18').className == 'ai-occupied'){
                  aioccupied.push(30);
		}
		if(document.getElementById('space19').className == 'ai-occupied'){
                  aioccupied.push(24);
		}
		if(document.getElementById('space20').className == 'ai-occupied'){
                  aioccupied.push(18);
		}
		if(document.getElementById('space24').className == 'ai-occupied'){
                  aioccupied.push(31);
		}
		if(document.getElementById('space25').className == 'ai-occupied'){
                  aioccupied.push(25);
		}
		if(document.getElementById('space26').className == 'ai-occupied'){
                  aioccupied.push(19);
		}
		if(document.getElementById('space30').className == 'ai-occupied'){
                  aioccupied.push(32);
		}
		if(document.getElementById('space31').className == 'ai-occupied'){
                  aioccupied.push(26);
		}
		if(document.getElementById('space32').className == 'ai-occupied'){
                  aioccupied.push(20);
		}

 for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(aoccupied[i]!=j){
			if(section3.indexOf(j)!=-1&&aioccupied.indexOf(j)==-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}
else if(section==4){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space21').className == 'occupied'){
                  occupied.push(23);
		}
		if(document.getElementById('space22').className == 'occupied'){
                  occupied.push(29);
		}
		if(document.getElementById('space23').className == 'occupied'){
                  occupied.push(35);
		}
		if(document.getElementById('space27').className == 'occupied'){
                  occupied.push(22);
		}
		if(document.getElementById('space28').className == 'occupied'){
                  occupied.push(28);
		}
		if(document.getElementById('space29').className == 'occupied'){
                  occupied.push(34);
		}
		if(document.getElementById('space33').className == 'occupied'){
                  occupied.push(21);
		}
		if(document.getElementById('space34').className == 'occupied'){
                  occupied.push(27);
		}
		if(document.getElementById('space35').className == 'occupied'){
                  occupied.push(33);
		}

if(document.getElementById('space21').className == 'ai-occupied'){
                  aioccupied.push(23);
		}
		if(document.getElementById('space22').className == 'ai-occupied'){
                  aioccupied.push(29);
		}
		if(document.getElementById('space23').className == 'ai-occupied'){
                  aioccupied.push(35);
		}
		if(document.getElementById('space27').className == 'ai-occupied'){
                  aioccupied.push(22);
		}
		if(document.getElementById('space28').className == 'ai-occupied'){
                  aioccupied.push(28);
		}
		if(document.getElementById('space29').className == 'ai-occupied'){
                  aioccupied.push(34);
		}
		if(document.getElementById('space33').className == 'ai-occupied'){
                  aioccupied.push(21);
		}
		if(document.getElementById('space34').className == 'ai-occupied'){
                  aioccupied.push(27);
		}
		if(document.getElementById('space35').className == 'ai-occupied'){
                  aioccupied.push(33);
		}

                for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(occupied[i]!=j&&aioccupied[i]!=j){
			if(section4.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space21').className == 'occupied'){
                  aoccupied.push(33);
		}
		if(document.getElementById('space22').className == 'occupied'){
                  aoccupied.push(27);
		}
		if(document.getElementById('space23').className == 'occupied'){
                  aoccupied.push(21);
		}
		if(document.getElementById('space27').className == 'occupied'){
                  aoccupied.push(34);
		}
		if(document.getElementById('space28').className == 'occupied'){
                  aoccupied.push(28);
		}
		if(document.getElementById('space29').className == 'occupied'){
                  aoccupied.push(22);
		}
		if(document.getElementById('space33').className == 'occupied'){
                  aoccupied.push(35);
		}
		if(document.getElementById('space34').className == 'occupied'){
                  aoccupied.push(29);
		}
		if(document.getElementById('space35').className == 'occupied'){
                  aoccupied.push(23);
		}


if(document.getElementById('space21').className == 'ai-occupied'){
                  aioccupied.push(33);
		}
		if(document.getElementById('space22').className == 'ai-occupied'){
                  aioccupied.push(27);
		}
		if(document.getElementById('space23').className == 'ai-occupied'){
                  aioccupied.push(21);
		}
		if(document.getElementById('space27').className == 'ai-occupied'){
                  aioccupied.push(34);
		}
		if(document.getElementById('space28').className == 'ai-occupied'){
                  aioccupied.push(28);
		}
		if(document.getElementById('space29').className == 'ai-occupied'){
                  aioccupied.push(22);
		}
		if(document.getElementById('space33').className == 'ai-occupied'){
                  aioccupied.push(35);
		}
		if(document.getElementById('space34').className == 'ai-occupied'){
                  aioccupied.push(29);
		}
		if(document.getElementById('space35').className == 'ai-occupied'){
                  aioccupied.push(23);
		}

 for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section4.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}
can_rotate = false;
can_place = true;
checkWin();
aiMove();
}
else{
alert("You must place a piece on the board before you can rotate.");
}
}














function airotate(section, direction) {
if(section==1){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space0').className == 'occupied'){
                  occupied.push(2);
		}
		if(document.getElementById('space1').className == 'occupied'){
                  occupied.push(8);
		}
		if(document.getElementById('space2').className == 'occupied'){
                  occupied.push(14);
		}
		if(document.getElementById('space6').className == 'occupied'){
                  occupied.push(1);
		}
		if(document.getElementById('space7').className == 'occupied'){
                  occupied.push(7);
		}
		if(document.getElementById('space8').className == 'occupied'){
                  occupied.push(13);
		}
		if(document.getElementById('space12').className == 'occupied'){
                  occupied.push(0);
		}
		if(document.getElementById('space13').className == 'occupied'){
                  occupied.push(6);
		}
		if(document.getElementById('space14').className == 'occupied'){
                  occupied.push(12);
		}

                if(document.getElementById('space0').className == 'ai-occupied'){
                  aioccupied.push(2);
		}
		if(document.getElementById('space1').className == 'ai-occupied'){
                  aioccupied.push(8);
		}
		if(document.getElementById('space2').className == 'ai-occupied'){
                  aioccupied.push(14);
		}
		if(document.getElementById('space6').className == 'ai-occupied'){
                  aioccupied.push(1);
		}
		if(document.getElementById('space7').className == 'ai-occupied'){
                  aioccupied.push(7);
		}
		if(document.getElementById('space8').className == 'ai-occupied'){
                  aioccupied.push(13);
		}
		if(document.getElementById('space12').className == 'ai-occupied'){
                  aioccupied.push(0);
		}
		if(document.getElementById('space13').className == 'ai-occupied'){
                  aioccupied.push(6);
		}
		if(document.getElementById('space14').className == 'ai-occupied'){
                  aioccupied.push(12);
		}


                for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section1.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
               
		}
		}
		}

	   for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
                if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space0').className == 'occupied'){
                  aoccupied.push(12);
		}
		if(document.getElementById('space1').className == 'occupied'){
                  aoccupied.push(6);
		}
		if(document.getElementById('space2').className == 'occupied'){
                  aoccupied.push(0);
		}
		if(document.getElementById('space6').className == 'occupied'){
                  aoccupied.push(13);
		}
		if(document.getElementById('space7').className == 'occupied'){
                  aoccupied.push(7);
		}
		if(document.getElementById('space8').className == 'occupied'){
                  aoccupied.push(1);
		}
		if(document.getElementById('space12').className == 'occupied'){
                  aoccupied.push(14);
		}
		if(document.getElementById('space13').className == 'occupied'){
                  aoccupied.push(8);
		}
		if(document.getElementById('space14').className == 'occupied'){
                  aoccupied.push(2);
		}

if(document.getElementById('space0').className == 'ai-occupied'){
                  aioccupied.push(12);
		}
		if(document.getElementById('space1').className == 'ai-occupied'){
                  aioccupied.push(6);
		}
		if(document.getElementById('space2').className == 'ai-occupied'){
                  aioccupied.push(0);
		}
		if(document.getElementById('space6').className == 'ai-occupied'){
                  aioccupied.push(13);
		}
		if(document.getElementById('space7').className == 'ai-occupied'){
                  aioccupied.push(7);
		}
		if(document.getElementById('space8').className == 'ai-occupied'){
                  aioccupied.push(1);
		}
		if(document.getElementById('space12').className == 'ai-occupied'){
                  aioccupied.push(14);
		}
		if(document.getElementById('space13').className == 'ai-occupied'){
                  aioccupied.push(8);
		}
		if(document.getElementById('space14').className == 'ai-occupied'){
                  aioccupied.push(2);
		}

 for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section1.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<15; i++){
                for(j=0; j<15; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
 if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}

else if(section==2){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space3').className == 'occupied'){
                  occupied.push(5);
		}
		if(document.getElementById('space4').className == 'occupied'){
                  occupied.push(11);
		}
		if(document.getElementById('space5').className == 'occupied'){
                  occupied.push(17);
		}
		if(document.getElementById('space9').className == 'occupied'){
                  occupied.push(4);
		}
		if(document.getElementById('space10').className == 'occupied'){
                  occupied.push(10);
		}
		if(document.getElementById('space11').className == 'occupied'){
                  occupied.push(16);
		}
		if(document.getElementById('space15').className == 'occupied'){
                  occupied.push(3);
		}
		if(document.getElementById('space16').className == 'occupied'){
                  occupied.push(9);
		}
		if(document.getElementById('space17').className == 'occupied'){
                  occupied.push(15);
		}

if(document.getElementById('space3').className == 'ai-occupied'){
                  aioccupied.push(5);
		}
		if(document.getElementById('space4').className == 'ai-occupied'){
                  aioccupied.push(11);
		}
		if(document.getElementById('space5').className == 'ai-occupied'){
                  aioccupied.push(17);
		}
		if(document.getElementById('space9').className == 'ai-occupied'){
                  aioccupied.push(4);
		}
		if(document.getElementById('space10').className == 'ai-occupied'){
                  aioccupied.push(10);
		}
		if(document.getElementById('space11').className == 'ai-occupied'){
                  aioccupied.push(16);
		}
		if(document.getElementById('space15').className == 'ai-occupied'){
                  aioccupied.push(3);
		}
		if(document.getElementById('space16').className == 'ai-occupied'){
                  aioccupied.push(9);
		}
		if(document.getElementById('space17').className == 'ai-occupied'){
                  aioccupied.push(15);
		}

                for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section2.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space3').className == 'occupied'){
                  aoccupied.push(15);
		}
		if(document.getElementById('space4').className == 'occupied'){
                  aoccupied.push(9);
		}
		if(document.getElementById('space5').className == 'occupied'){
                  aoccupied.push(3);
		}
		if(document.getElementById('space9').className == 'occupied'){
                  aoccupied.push(16);
		}
		if(document.getElementById('space10').className == 'occupied'){
                  aoccupied.push(10);
		}
		if(document.getElementById('space11').className == 'occupied'){
                  aoccupied.push(4);
		}
		if(document.getElementById('space15').className == 'occupied'){
                  aoccupied.push(17);
		}
		if(document.getElementById('space16').className == 'occupied'){
                  aoccupied.push(11);
		}
		if(document.getElementById('space17').className == 'occupied'){
                  aoccupied.push(5);
		}


if(document.getElementById('space3').className == 'ai-occupied'){
                  aioccupied.push(15);
		}
		if(document.getElementById('space4').className == 'ai-occupied'){
                  aioccupied.push(9);
		}
		if(document.getElementById('space5').className == 'ai-occupied'){
                  aioccupied.push(3);
		}
		if(document.getElementById('space9').className == 'ai-occupied'){
                  aioccupied.push(16);
		}
		if(document.getElementById('space10').className == 'ai-occupied'){
                  aioccupied.push(10);
		}
		if(document.getElementById('space11').className == 'ai-occupied'){
                  aioccupied.push(4);
		}
		if(document.getElementById('space15').className == 'ai-occupied'){
                  aioccupied.push(17);
		}
		if(document.getElementById('space16').className == 'ai-occupied'){
                  aioccupied.push(11);
		}
		if(document.getElementById('space17').className == 'ai-occupied'){
                  aioccupied.push(5);
		}


 for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section2.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<18; i++){
                for(j=0; j<18; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
                if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}

else if(section==3){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space18').className == 'occupied'){
                  occupied.push(20);
		}
		if(document.getElementById('space19').className == 'occupied'){
                  occupied.push(26);
		}
		if(document.getElementById('space20').className == 'occupied'){
                  occupied.push(32);
		}
		if(document.getElementById('space24').className == 'occupied'){
                  occupied.push(19);
		}
		if(document.getElementById('space25').className == 'occupied'){
                  occupied.push(25);
		}
		if(document.getElementById('space26').className == 'occupied'){
                  occupied.push(31);
		}
		if(document.getElementById('space30').className == 'occupied'){
                  occupied.push(18);
		}
		if(document.getElementById('space31').className == 'occupied'){
                  occupied.push(24);
		}
		if(document.getElementById('space32').className == 'occupied'){
                  occupied.push(30);
		}

if(document.getElementById('space18').className == 'ai-occupied'){
                  aioccupied.push(20);
		}
		if(document.getElementById('space19').className == 'ai-occupied'){
                  aioccupied.push(26);
		}
		if(document.getElementById('space20').className == 'ai-occupied'){
                  aioccupied.push(32);
		}
		if(document.getElementById('space24').className == 'ai-occupied'){
                  aioccupied.push(19);
		}
		if(document.getElementById('space25').className == 'ai-occupied'){
                  aioccupied.push(25);
		}
		if(document.getElementById('space26').className == 'ai-occupied'){
                  aioccupied.push(31);
		}
		if(document.getElementById('space30').className == 'ai-occupied'){
                  aioccupied.push(18);
		}
		if(document.getElementById('space31').className == 'ai-occupied'){
                  aioccupied.push(24);
		}
		if(document.getElementById('space32').className == 'ai-occupied'){
                  aioccupied.push(30);
		}

                for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section3.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space18').className == 'occupied'){
                  aoccupied.push(30);
		}
		if(document.getElementById('space19').className == 'occupied'){
                  aoccupied.push(24);
		}
		if(document.getElementById('space20').className == 'occupied'){
                  aoccupied.push(18);
		}
		if(document.getElementById('space24').className == 'occupied'){
                  aoccupied.push(31);
		}
		if(document.getElementById('space25').className == 'occupied'){
                  aoccupied.push(25);
		}
		if(document.getElementById('space26').className == 'occupied'){
                  aoccupied.push(19);
		}
		if(document.getElementById('space30').className == 'occupied'){
                  aoccupied.push(32);
		}
		if(document.getElementById('space31').className == 'occupied'){
                  aoccupied.push(26);
		}
		if(document.getElementById('space32').className == 'occupied'){
                  aoccupied.push(20);
		}


if(document.getElementById('space18').className == 'ai-occupied'){
                  aioccupied.push(30);
		}
		if(document.getElementById('space19').className == 'ai-occupied'){
                  aioccupied.push(24);
		}
		if(document.getElementById('space20').className == 'ai-occupied'){
                  aioccupied.push(18);
		}
		if(document.getElementById('space24').className == 'ai-occupied'){
                  aioccupied.push(31);
		}
		if(document.getElementById('space25').className == 'ai-occupied'){
                  aioccupied.push(25);
		}
		if(document.getElementById('space26').className == 'ai-occupied'){
                  aioccupied.push(19);
		}
		if(document.getElementById('space30').className == 'ai-occupied'){
                  aioccupied.push(32);
		}
		if(document.getElementById('space31').className == 'ai-occupied'){
                  aioccupied.push(26);
		}
		if(document.getElementById('space32').className == 'ai-occupied'){
                  aioccupied.push(20);
		}

 for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section3.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<33; i++){
                for(j=0; j<33; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}
else if(section==4){
	if(direction=='clockwise'){
occupied = [];
aioccupied = [];
 		if(document.getElementById('space21').className == 'occupied'){
                  occupied.push(23);
		}
		if(document.getElementById('space22').className == 'occupied'){
                  occupied.push(29);
		}
		if(document.getElementById('space23').className == 'occupied'){
                  occupied.push(35);
		}
		if(document.getElementById('space27').className == 'occupied'){
                  occupied.push(22);
		}
		if(document.getElementById('space28').className == 'occupied'){
                  occupied.push(28);
		}
		if(document.getElementById('space29').className == 'occupied'){
                  occupied.push(34);
		}
		if(document.getElementById('space33').className == 'occupied'){
                  occupied.push(21);
		}
		if(document.getElementById('space34').className == 'occupied'){
                  occupied.push(27);
		}
		if(document.getElementById('space35').className == 'occupied'){
                  occupied.push(33);
		}

if(document.getElementById('space21').className == 'ai-occupied'){
                  aioccupied.push(23);
		}
		if(document.getElementById('space22').className == 'ai-occupied'){
                  aioccupied.push(29);
		}
		if(document.getElementById('space23').className == 'ai-occupied'){
                  aioccupied.push(35);
		}
		if(document.getElementById('space27').className == 'ai-occupied'){
                  aioccupied.push(22);
		}
		if(document.getElementById('space28').className == 'ai-occupied'){
                  aioccupied.push(28);
		}
		if(document.getElementById('space29').className == 'ai-occupied'){
                  aioccupied.push(34);
		}
		if(document.getElementById('space33').className == 'ai-occupied'){
                  aioccupied.push(21);
		}
		if(document.getElementById('space34').className == 'ai-occupied'){
                  aioccupied.push(27);
		}
		if(document.getElementById('space35').className == 'ai-occupied'){
                  aioccupied.push(33);
		}

                for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(occupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section4.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(occupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}
		
	}

else if(direction=='anticlockwise'){
aoccupied = [];
aioccupied = [];

if(document.getElementById('space21').className == 'occupied'){
                  aoccupied.push(33);
		}
		if(document.getElementById('space22').className == 'occupied'){
                  aoccupied.push(27);
		}
		if(document.getElementById('space23').className == 'occupied'){
                  aoccupied.push(21);
		}
		if(document.getElementById('space27').className == 'occupied'){
                  aoccupied.push(34);
		}
		if(document.getElementById('space28').className == 'occupied'){
                  aoccupied.push(28);
		}
		if(document.getElementById('space29').className == 'occupied'){
                  aoccupied.push(22);
		}
		if(document.getElementById('space33').className == 'occupied'){
                  aoccupied.push(35);
		}
		if(document.getElementById('space34').className == 'occupied'){
                  aoccupied.push(29);
		}
		if(document.getElementById('space35').className == 'occupied'){
                  aoccupied.push(23);
		}


if(document.getElementById('space21').className == 'ai-occupied'){
                  aioccupied.push(33);
		}
		if(document.getElementById('space22').className == 'ai-occupied'){
                  aioccupied.push(27);
		}
		if(document.getElementById('space23').className == 'ai-occupied'){
                  aioccupied.push(21);
		}
		if(document.getElementById('space27').className == 'ai-occupied'){
                  aioccupied.push(34);
		}
		if(document.getElementById('space28').className == 'ai-occupied'){
                  aioccupied.push(28);
		}
		if(document.getElementById('space29').className == 'ai-occupied'){
                  aioccupied.push(22);
		}
		if(document.getElementById('space33').className == 'ai-occupied'){
                  aioccupied.push(35);
		}
		if(document.getElementById('space34').className == 'ai-occupied'){
                  aioccupied.push(29);
		}
		if(document.getElementById('space35').className == 'ai-occupied'){
                  aioccupied.push(23);
		}

 for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(aoccupied[i]!=j&&aioccupied.indexOf(j)==-1){
			if(section4.indexOf(j)!=-1){
                	document.getElementById('space'+j).className = 'unoccupied';
			}
		}
		}
		}

	   for(i=0; i<36; i++){
                for(j=0; j<36; j++){
		if(aoccupied[i]==j){
                document.getElementById('space'+j).className = 'occupied';
		}
if(aioccupied[i]==j){
                document.getElementById('space'+j).className = 'ai-occupied';
		}
		}
		}




}



}

checkWin();

}