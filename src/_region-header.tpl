<!--region header-->
<div class="region-header">
	<div class="region-header__bg" style="background-image: url(@@bgSrc);">&nbsp;</div>
	<div class="region-header__caption">
		@@if(!context.severalHeading){
		<h1>@@title</h1>
		}
		@@if(context.severalHeading){
		<div class="col">
			<h2>Отдел БО РБИЦ</h2>
			<h3><i>Возрождаем родную землю вместе!</i></h3>
		</div>
		<div class="col">
			<img width="48" src="http://niipb.mchs.gov.by/local/templates/.default/img/logo.png" height="48">
			<h2>НИИ ПБ и ЧС Беларуси</h2>
		</div>
		}
	</div>
	<div class="region-header__holder">
		<div class="region-logo">
			<a href="#" title="Брестское областное управление МЧС Республики Беларусь">
				<img src="@@logoSrc" alt="Учреждение «Брестское областное управление МЧС Республики Беларусь»" />
			</a>
		</div>
		<ul class="region-header__info">
			@@if(context.adr){
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="76.5 13.5 458.4 612" enable-background="new 76.5 13.5 458.4 612"> <path d="M306,13.5c-126.1,0-228.3,103.4-229.5,231.3c0.6,44.7,13.5,86.9,36.1,121.8L288.3,612c4.9,9.2,11.6,13.5,17.7,13.5  c6.7,0,12.9-4.3,17.7-13.5l175-245.4c22.6-35.5,36.1-77.1,36.1-121.8C534.3,116.9,432.1,13.5,306,13.5z M306,343.4  c-55.7,0-100.4-44.7-100.4-100.4S250.3,142.6,306,142.6c55.7,0,100.4,44.7,100.4,100.4C406.4,298.7,361.7,343.4,306,343.4z"></path> </svg>
				<span>@@adr</span>
			</li>
			}
			@@if(context.tel){
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="91.8 257.4 428.4 277.2" enable-background="new 91.8 257.4 428.4 277.2"> <path d="M516.4,337.9c-4.9-20-12.5-33.7-21-49.4c-98.6-41.1-280.4-41.8-378.9,0c-6.9,13.6-14.6,29.5-19.7,48.7  c-3.9,14.9-9.3,46.1,0.6,59c7.6,9.9,29.2,9.8,45.5,8.5c23.3-1.7,40.3-10.3,46.6-25.5c6-14.2,0.5-38.9,7.4-53.4  c3.2-6.6,11.3-14.3,18.5-18.4c34.1-19,118.4-18.4,161.5-7.2c15.6,4,32.9,10.7,38.7,22.5c8.3,17,0.6,47.3,9.2,61.5  c5.3,8.9,17.3,15.5,28.2,18.3c17.2,4.1,44.5,5.1,57.6-3.1c1.9-2,3.8-4.1,5.6-6C523.2,379.7,519.5,351.1,516.4,337.9z M468.5,473.1  c-3.4-9-12.3-18.3-19.1-26.7c-18.1-22.6-33.8-41.1-52.2-63.3c-3.5-4.2-9-9.8-9.8-13.4c-2.7-12.4,2.1-25,0-37.1h-40.5  c-2.2,9.3,1.2,24-1.9,32.2c-11.3,2.2-25.7,1.3-39.3,1.3c-13.9,0-28,1.4-38.7-1.8c-2.6-8.4-0.6-21.3-1.2-31.7h-39.9  c-0.9,0.2-1.3,0.8-1.3,1.8v36.5c-13.3,16.6-26.8,33.2-41.1,50.6c-6.2,7.5-13.4,14.9-20.2,23c-0.5,0.7-1.2,1.4-1.8,2  c-6.9,8.5-13.2,17.6-16.7,27.8c-5.9,17-2.9,37.1-3.7,60.3h330.4C469.8,509.6,474.7,490.2,468.5,473.1z"></path> </svg>
				<span><a href="tel:@@telShort">@@tel</a></span>
			</li>
			}
			@@if(context.fax){
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 24 22" enable-background="new 0 0 24 22"><g><path d="M1,6C0.447,6,0,6.447,0,7v13c0,0.553,0.447,1,1,1V6z"></path><path d="M6,5H3C2.447,5,2,5.447,2,6v15c0,0.553,0.447,1,1,1h3c0.553,0,1-0.447,1-1V6C7,5.447,6.553,5,6,5z"></path><path d="M23,6v2H9V7V6H8v15h15c0.553,0,1-0.447,1-1V7C24,6.447,23.553,6,23,6z M12,19h-2v-2h2V19z M12,16h-2v-2h2V16z M15,19h-2v-2   h2V19z M15,16h-2v-2h2V16z M18,19h-2v-2h2V19z M18,16h-2v-2h2V16z M21,19h-2v-2h2V19z M21,16h-2v-2h2V16z M21,12H10V9h11V12z"></path><path d="M22,7V6V1c0-0.553-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v5v1H22z"></path></g></svg>
				<span>@@fax</span>
			</li>
			}
			@@if(context.work){
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 24 22" enable-background="new 0 0 24 22"><g><path d="M1,6C0.447,6,0,6.447,0,7v13c0,0.553,0.447,1,1,1V6z"></path><path d="M6,5H3C2.447,5,2,5.447,2,6v15c0,0.553,0.447,1,1,1h3c0.553,0,1-0.447,1-1V6C7,5.447,6.553,5,6,5z"></path><path d="M23,6v2H9V7V6H8v15h15c0.553,0,1-0.447,1-1V7C24,6.447,23.553,6,23,6z M12,19h-2v-2h2V19z M12,16h-2v-2h2V16z M15,19h-2v-2   h2V19z M15,16h-2v-2h2V16z M18,19h-2v-2h2V19z M18,16h-2v-2h2V16z M21,19h-2v-2h2V19z M21,16h-2v-2h2V16z M21,12H10V9h11V12z"></path><path d="M22,7V6V1c0-0.553-0.447-1-1-1H11c-0.553,0-1,0.447-1,1v5v1H22z"></path></g></svg>
				<span>@@work</span>
			</li>
			}
			@@if(context.email){
			<li>
				<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="110.2 191 391.7 257" enable-background="new 110.2 191 391.7 257"> <path d="M483.5,191h-355c-10.2,0-18.4,8.2-18.4,18.4v220.3c0,10.2,8.2,18.4,18.4,18.4h355c10.2,0,18.4-8.2,18.4-18.4V209.3  C501.8,199.2,493.7,191,483.5,191z M444,394.8c-4.3,5.2-12.1,6-17.3,1.6l-70.4-57.8l-21.8,19.5c-16.3,14.6-41.1,14.6-57.4,0  l-21.6-19.5l-70.2,57.8c-5.2,4.3-13,3.6-17.3-1.6c-4.3-5.2-3.6-13,1.6-17.3l67.3-55.3l-67.7-60.8c-5.1-4.4-5.7-12.1-1.3-17.3  c2-2.3,4.7-3.8,7.6-4.2v0c0.4,0,0.8,0,1.1,0c3.3-0.2,6.6,1,9,3.3L293.6,340c5.3,4.8,19.3,4.8,24.7,0l108.1-96.8  c5-4.5,12.8-4.2,17.3,0.9c4.5,5,4.2,12.8-0.9,17.3c0,0,0,0,0,0L374.9,322l67.5,55.5C447.6,381.8,448.3,389.5,444,394.8z"></path> </svg>
				<span><a href="mailto:@@email">@@email</a></span>
			</li>
			}
		</ul>
	</div>
</div>
<!--region header end-->