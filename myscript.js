var Persons = [
                {
      name: 'John',
      surname: 'Smith',
      favoritePerformers: ["Justin Timberlake", "Linkin park", "Evanescence"],
      age: 24,
      myPhoto: "img/boy1.800x1000.jpg",  
      likes: 9   
      },

 {
      name: 'Alex',
      surname: 'Baker',
      favoritePerformers: ["Linkin park", "Ed Sheeran", "Lana del ray"],
      age: 28,
      myPhoto: "img/boy2.800x1000.jpg",  
      likes: 8   
      },

{
      name: 'helen',
      surname: 'Willhamson',
      favoritePerformers: ["Evanescence", "30 Seconds to Mars", "Emma Watson"],
      age: 25,
      myPhoto: "img/girl1.800x1000.jpg",  
      likes: 5   
      },

 {
      name: 'cloudia',
      surname: 'walker',
      favoritePerformers: ["Justin Timberlake", "katy perry", "KISS"],
      age: 30,
      myPhoto: "img/girl2.800x1000.jpg",  
      likes: 4   
      },
      
];

var i = 0
         
        document.writeln("<section>");

    for (i = 0; i < Persons.length; i++) {

      var like = Persons[i].likes ;
      
        document.writeln("<article>");
        
        document.writeln('<div class="card ' +i+'">');

        document.writeln("<img src=" + '"'+ Persons[i].myPhoto +'"' + "style=100%>");

        document.writeln("<p>" + "Name : " + "<b>" + Persons[i].name + "</b>" + "<p>" );

        document.writeln("<p>" +  "surname : " + "<b>" + Persons[i].surname + "</b>" + "<p>");

        document.writeln("<p> Age: " + "<b>" +Persons[i].age + "</b>" + "</p>");
       
        document.writeln("<div>");

        document.writeln('<button id= "like'+i+'" >LIKE</button>');
        
        document.writeln('<p> <span class="out" id="likeout'+i+'">' + Persons[i].likes + '</span> <span><i class="fa fa-heart fa-2x" aria-hidden="true"></i></span></p>');
        
        document.writeln('</div>');
        
        document.writeln("</div>");
        
        document.writeln("</article>");
          
    };

    document.writeln("</section");

  	$('#like0').on('click',function (){

    $('#likeout0').text( Persons[0].likes + 1);

    $('#like0').css('background-color' , ('red'));

    $('#like0').text('LIKED');

  });

    $('#like1').on('click',function (){

    $('#likeout1').text( Persons[1].likes + 1);

    $('#like1').css('background-color' , ('red'));

    $('#like1').text('LIKED');

  });

    $('#like2').on('click',function (){

    $('#likeout2').text( Persons[2].likes + 1);

    $('#like2').css('background-color' , ('red'));

    $('#like2').text('LIKED');

  });

    $('#like3').on('click',function (){

    $('#likeout3').text( Persons[3].likes + 1);

    $('#like3').css('background-color' , ('red'));

    $('#like3').text('LIKED');

  });

	$(document).ready(function() {

	$('#all').on('click' ,(function (){

	$('.card').show();

	}));

	$('#male').on('click' ,(function (){
	$('.0').show();
	$('.1').show();
	$('.2').hide();
	$('.3').hide();
		}));

	$('#female').on('click' ,(function (){
	$('.2').show();
	$('.3').show();
	$('.1').hide();
	$('.0').hide();

		}));

			});





