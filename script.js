
   let mainNavUl = document.querySelector('#list_ul_navMain');
   let mainNavUlIcons = document.querySelectorAll('.icon ');
	
	
	
	
	mainNavUlIcons.forEach(e=>{
		e.addEventListener('click',()=>{
			
			mainNavUl.classList.toggle('activeUl')
			
			if(mainNavUl.classList.contains('activeUl')){
				mainNavUlIcons[0].style.opacity=-1;
				mainNavUlIcons[1].style.opacity=1;
			}else{
				mainNavUlIcons[0].style.opacity=1;
				mainNavUlIcons[1].style.opacity=-1;
			}
	
		})
	})
	
	
	let header = document.querySelector('header')
	
	window.addEventListener('resize',()=>{
			if(document.body.clientWidth > 991){
					mainNavUl.classList.remove('activeUl')
			}
	})
	window.addEventListener('scroll',(e)=>{
	
		
		if(window.scrollY > 350){
			header.style.backgroundColor='#7a6ad8'	;
			header.style.top='0px';
		
	
		}else{
			header.style.backgroundColor='#00000000';
		
		}
	})
	
	
	
	
	
	
	
	
	
	/*  section home slider */
	let slider_home = document.querySelector('.home .slider_home')
	let item = document.querySelectorAll('.home .slider_home .item')
	let left = document.querySelector('.left_slider_home')
	let right = document.querySelector('.right_slider_home')
	let widthItem =item[0].clientWidth;
	
	
	
	window.onresize=()=>{
		widthItem = item[0].clientWidth	;
		
	}
	right.addEventListener('click',()=>{
		slider_home.scrollLeft += widthItem;
		
	})
	left.addEventListener('click',()=>{
		slider_home.scrollLeft -= widthItem;
		
	
	})

		let falseSliderHome= false;
		
		function sliderHome(e){
			if(falseSliderHome === true){
				 slider_home.scrollLeft -= e.movementX;
				 slider_home.style.cssText ='scroll-behavior : auto; cursor:pointer'

			}else{
			  slider_home.style.cssText ='scroll-behavior : none; cursor: auto'
			}
		}
	 slider_home.addEventListener('mousedown',() =>{
		return falseSliderHome = true;
	})
	 slider_home.addEventListener('mousemove', sliderHome)

	 slider_home.addEventListener('mouseup',() =>{
		return falseSliderHome = false;
	})

 slider_home.addEventListener('mouseout',() =>{
		return falseSliderHome = false;
	})







	let list_button = document.querySelectorAll('.services .ABOUT_US .section_about-us .list-about .list-button');
	
	function remove(){
		list_button.forEach(e=>{
			e.classList.remove('activeList')
		})
	}
	list_button[0].classList.toggle('activeList')
	list_button.forEach(e=>{
		e.addEventListener('click',()=>{
			remove()
			e.classList.toggle('activeList')
		
		})
		
	})
	








						
	let arrCourses=[
		{
			name:'Stella Blair',
			title:'Learn Web Design',
			titlePars:160,
			titleText:'WEBDESIGN',
			img:'./img/course-01.jpg',
			data:'',
		},
		{
			name:'Cindy Walker',
			title:'Web Development Tips',
			titlePars:360,
			titleText:'DEVELOPMENT',
			img:'./img/course-02.jpg',
			data:'',
		},
		{
			name:'David Hutson',
			title:'Latest Web Trends',
			titlePars:640,
			titleText:'WORDPRESS',
			img:'./img/course-03.jpg',
			data:'',
		},
		{
			name:'Stella Blair',
			title:'Online Learning Steps',
			titlePars:450,
			titleText:'DEVELOPMENT',
			img:'./img/course-04.jpg',
			data:'',
		},

		{
			name:'Sophia Rose',
			title:'Be a WordPress Master',
			titlePars:320,
			titleText:'WORDPRESS',
			img:'./img/course-05.jpg',
			data:'',
		},
		{
			name:'David Hutson',
			title:'Full Stack Developer',
			titlePars:240,
			titleText:'WORDPRESS',
			img:'./img/course-06.jpg',
			data:'',
		},
		
		
		
		
	];		
	let mainCourses = document.querySelector('.main-courses-box')
	let  buttonCourses =document.querySelectorAll('.button-courses')



		function addskils(add){
			mainCourses.innerHTML ='';
			for(let i =0; i < add.length; i++){
				let divs=`
				<div class='courses-box'>
							<div class='img'>
								<img src=${arrCourses[i].img} >
							</div>
							<div class='text-courses-box'>
								<span>${arrCourses[i].name} </span>
								<h3>
							${arrCourses[i].title}
							</h3>
							</div>
						
							
							<span class='adsolute text'> ${arrCourses[i].titleText}</span>
							<span class='adsolute pars'> ${arrCourses[i].titlePars} </span>
						</div> 				
				
				`;
				mainCourses.innerHTML += divs
			}
			
		}
	addskils(arrCourses)

		let btnSpan = document.querySelectorAll('.button-courses span')


		btnSpan.forEach(e=>{
			e.addEventListener('click',()=>{
				let dateArray = e.getAttribute('data-button');
				let arrFilter = arrCourses.filter((arrCoursesFilter)=>{
						if(dateArray === arrCoursesFilter.titleText){
							return arrCoursesFilter
						}
				} )
				if(e.getAttribute('data-button') == 'all'){
					addskils(arrCourses)
				}else{
					addskils(arrFilter)
				}
			})
		})


	/* start team slider */
	let sliderTeam= document.querySelector('.slider')
	let btnTeamLeft = document.querySelector('.left-team')
	let btnTeamRight = document.querySelector('.right-team')
	let widthTeamSlider = document.querySelectorAll('.box-slider')[0].clientWidth;
	let position= widthTeamSlider;
	window.onresize =()=>{
		position = widthTeamSlider
	}  //onresize
		btnTeamLeft.addEventListener('click',()=>{
			sliderTeam.scrollLeft -= position;
		})

		btnTeamRight.addEventListener('click',()=>{	
		
			sliderTeam.scrollLeft += position;
		
		})

		let falseSliderTeam = false;
		
		function mouseSliderTeam(e){
			if(falseSliderTeam === true){
				sliderTeam.scrollLeft -= e.movementX;
				sliderTeam.classList.add('activeSliderTeam')
			}else{
				sliderTeam.classList.remove('activeSliderTeam')
			}
		}
		






	sliderTeam.addEventListener('mousedown',() =>{
		return falseSliderTeam = true;
	})
	sliderTeam.addEventListener('mousemove', mouseSliderTeam)

	sliderTeam.addEventListener('mouseup',() =>{
		return falseSliderTeam = false;
	})
	sliderTeam.addEventListener('mouseout',() =>{
		return falseSliderTeam = false;
	})
/* end slider team */



/* start section page html and ul a page */
		let section = document.querySelectorAll('section');
		

	window.addEventListener('scroll',()=>{
		section.forEach(e=>{
			
			let Y = window.scrollY ;
			let offset = e.offsetTop
			let height = e.offsetTop + e.clientHeight;
			
			let classData = e.getAttribute('data-active-nave');
			
			
			if(Y >=  offset && Y < height){
		     	document.querySelector(`.${classData}`).classList.add('activeUl-List');
			}else{
				document.querySelector(`.${classData}`).classList.remove('activeUl-List');
			}
		})
		
		
		
		
		
		
		
		
	})



/* end section page html and ul a page */



















	