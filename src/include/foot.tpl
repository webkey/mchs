<!-- >>> foot.tpl <<< -->
<!--footer-->
<footer class="footer">
	<div class="layout">
		<div class="footer__holder">
			<!--footer common-->
			<div class="footer-common">
				<div class="layout">
					<!--footer nav-->
					<div class="footer-nav">
						<div class="footer-nav__col">
							<strong class="footer-nav__title"><span>МЧС Республики Беларусь</span></strong>
							<p>Республиканский орган государственного управления Беларуси.</p>
							<a href="#" class="btn-map-site"><i></i><span>Карта сайта</span></a>
						</div>
						<div class="footer-nav__col">
							<strong class="footer-nav__title"><span>Популярные разделы</span></strong>
							<ul class="footer-nav__links">
								<li><a href="#"><span>Цели изадачи МЧС</span></a></li>
								<li><a href="#"><span>Направления деятельности</span></a></li>
								<li><a href="#"><span>Руководство</span></a></li>
								<li><a href="#"><span>Контакты</span></a></li>
								<li><a href="#"><span>Важнейшие мероприятия</span></a></li>
								<li><a href="#"><span>Электронные обращения</span></a></li>
								<li><a href="#"><span>Родителям и педагогам</span></a></li>
								<li><a href="#"><span>Вопрос-ответ</span></a></li>
								<li><a href="#"><span>Отзывы о работе</span></a></li>
								<li><a href="#"><span>Голосование</span></a></li>
								<li><a href="#"><span>Цели изадачи МЧС</span></a></li>
								<li><a href="#"><span>Направления деятельности</span></a></li>
								<li><a href="#"><span>Руководство</span></a></li>
								<li><a href="#"><span>Контакты</span></a></li>
								<li><a href="#"><span>Важнейшие мероприятия</span></a></li>
							</ul>
						</div>
						<div class="footer-nav__col">
							<strong class="footer-nav__title"><span>МЧС в социальных сетях</span></strong>
							<p>Следите за последними новостями в социальных сетях.</p>
							<div class="social-networks">
								<div class="social-networks__list">
									@@loop('social-items.tpl', [
										{
											"class": "fb",
											"title": "Facebook",
											"vb": "-13.7 637.9 123 263.5",
											"path": "M67.2,723.1v-27.3c0-10.4,6.6-12.6,11.5-12.6c4.9,0,29.5,0,29.5,0v-45.4H67.8c-44.8,0-55.2,33.9-55.2,55.2  v30.1h-26.2v46.5h26.2c0,59.6,0,131.7,0,131.7h54.7c0,0,0-72.7,0-131.7h37.2l4.9-46.5L67.2,723.1L67.2,723.1z"
										}, {
											"class": "vk",
											"title": "Вконтакте",
											"vb": "-187.4 676 396.5 225.6",
											"path": "M199,864.7c-9.7-9.7-48.5-50.5-48.5-50.5c-5.8-7.8-7.8-17.5-1.9-25.2c11.7-15.5,33-42.7,40.8-54.4  c11.7-15.5,33-48.5,3.9-48.5h-64.1c-5.8,0-9.7,3.9-13.6,7.8c0,0-25.2,46.6-33,62.1c-21.4,42.7-36.9,29.1-36.9,9.7v-68  c0-11.7-9.7-21.4-21.4-21.4h-48.5c-13.6-1.9-25.2,5.8-35,15.5c0,0,25.2-3.9,25.2,29.1c0,7.8,0,31.1,0,50.5c0,7.8-5.8,13.6-13.6,13.6  c-3.9,0-7.8-1.9-11.7-3.9c-19.4-27.2-36.9-56.3-48.5-87.4c-1.9-3.9-7.8-7.8-11.7-7.8h-58.3c-5.8,0-9.7,3.9-9.7,9.7  c0,1.9,0,1.9,0,3.9c17.5,48.5,93.2,200,180.6,200h36.9c7.8,0,13.6-5.8,13.6-13.6v-21.4c0-7.8,5.8-13.6,13.6-13.6  c3.9,0,7.8,1.9,9.7,3.9l42.7,40.8c3.9,3.9,9.7,5.8,13.6,5.8h58.3C214.6,899.6,214.6,880.2,199,864.7z"
										}, {
											"class": "twitter",
											"title": "Twitter",
											"vb": "-368.9 301 240.3 195.3",
											"path": "M-128.6,324.1c-8.8,3.9-18.3,6.6-28.3,7.8c10.2-6.1,18-15.8,21.7-27.3c-9.5,5.7-20.1,9.8-31.3,12  c-9-9.6-21.8-15.6-36-15.6c-27.2,0-49.3,22.1-49.3,49.3c0,3.9,0.4,7.6,1.3,11.2c-41-2.1-77.3-21.7-101.6-51.5  c-4.2,7.3-6.7,15.7-6.7,24.8c0,17.1,8.7,32.2,21.9,41c-8.1-0.3-15.7-2.5-22.3-6.2c0,0.2,0,0.4,0,0.6c0,23.9,17,43.8,39.6,48.3  c-4.1,1.1-8.5,1.7-13,1.7c-3.2,0-6.3-0.3-9.3-0.9c6.3,19.6,24.5,33.8,46.1,34.2c-16.9,13.2-38.1,21.1-61.2,21.1  c-4,0-7.9-0.2-11.8-0.7c21.8,14,47.7,22.2,75.6,22.2c90.7,0,140.3-75.1,140.3-140.3c0-2.1,0-4.3-0.1-6.4  C-143.6,342.7-135.2,334-128.6,324.1z"
										}, {
											"class": "ok",
											"title": "Одноклассники",
											"vb": "47.6 587 470.7 792",
											"path": "M285.2,956.6c103,0,184.7-81.9,184.7-184.7s-81.7-185-184.7-185s-184.8,81.9-184.8,184.7  S182.3,956.6,285.2,956.6z M285.2,679.5c50.2,0,92.5,42.3,92.5,92.5c0,50.2-42.3,92.5-92.5,92.5s-92.5-42.4-92.5-92.6  C192.9,721.6,235,679.5,285.2,679.5z M470.1,982.9c-26.3,0-79.2,52.9-184.7,52.9s-158.6-52.9-185-52.9c-29,0-52.9,23.8-52.9,52.9  c0,26.3,15.8,39.6,26.3,44.8c31.7,18.5,132.1,60.7,132.1,60.7L92.4,1283.8c0,0-21.1,23.8-21.1,42.3c0,29,23.8,52.9,52.9,52.9  c26.3,0,39.6-18.5,39.6-18.5s118.8-142.6,118.8-139.9l118.8,139.9c0,0,13.3,18.5,39.6,18.5c29,0,52.9-23.8,52.9-52.9  c0-15.8-21.1-42.3-21.1-42.3l-113.6-142.6c0,0,100.3-42.3,132.1-60.7c10.6-7.9,26.3-18.5,26.3-44.8  C522.7,1006.7,499,982.9,470.1,982.9z"
										}, {
											"class": "instagram",
											"title": "Instagram",
											"vb": "38 318 612 612",
											"path": "M507.7,625.8c0,90.7-73.5,164.2-164.2,164.2s-164.2-73.5-164.2-164.2c0-33.5,10.1-64.6,27.3-90.7H38  v254.2C38,867,101,930,178.7,930h330.4c77.7,0,140.7-63,140.7-140.7V535.1H480.2C497.5,561,507.7,592.3,507.7,625.8z M344,743.1  c64.8,0,117.3-52.5,117.3-117.3S408.8,508.5,344,508.5S226.7,561,226.7,625.8C226.7,690.6,279.2,743.1,344,743.1z M279.9,561.5  c17.2-17,40-26.6,64.1-26.6c24.3,0,47.1,9.4,64.3,26.6c17.2,17.2,26.6,40,26.6,64.3s-9.4,47.1-26.6,64.3  c-17.2,17.2-40,26.6-64.3,26.6c-24.3,0-47.1-9.4-64.1-26.6c-17.2-17.2-26.6-40-26.6-64.3C253.3,601.5,262.7,578.7,279.9,561.5z   M509.3,318H178.7c-7.4,0-14.8,0.5-22.1,1.6h22.6v142h-26.6V320.4c-9.2,1.6-18.1,4.3-26.4,7.8v133.6H99.7V342.3  C62.4,367.6,38,410.3,38,458.7v49.8h190.5c29.7-29,70.1-46.9,115-46.9c44.7,0,85.3,17.9,115,46.9H650v-49.8  C650,381,587,318,509.3,318z M577,461.6h-69.3v-69.3H577V461.6z"
										}
									])
								</div>
							</div>
						</div>
					</div>
					<!--footer nav end-->
				</div>
			</div>
			<!--footer common end-->

			<!--footer bottom-->
			<div class="footer-bottom">
				<div class="footer-bottom__holder layout">
					<div class="footer-bottom__col">
						<div class="copyright">Copyright &copy; 2017 МЧС Республики Беларусь</div>
					</div>
					<div class="footer-bottom__col">
						<a href="#">Правила использования материалов</a>
					</div>
					<div class="footer-bottom__col">
						<!--developer-->
						<div class="developer">
							<a href="http://astronim.by/">
								<span class="developer__label">Сделано командой &mdash;</span>
								<span class="developer__logo">Astronim*Support</span>
							</a>
						</div>
						<!--developer end-->
					</div>
				</div>
			</div>
			<!--footer bottom end-->
		</div>
	</div>
</footer>
<!--footer end-->

<script src="js/libs.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>