<!-- >>> foot.tpl <<< -->
<!--FOOTER-->
@@include('_footer.tpl')
<!--FOOTER end-->
<!--POPUPS-->
@@include('_popups.tpl', {
	"hasRegionMenu": "@@hasRegionMenu",
	"hasSquadMenu": "@@hasSquadMenu",
	"mainNavItemActive": "@@mainNavItemActive",
	"regionMenuActiveItem": "@@regionMenuActiveItem",
	"subSiteMenu": "@@subSiteMenu",
	"titleSub": "@@titleSub",
	"titleMain": "@@titleMain",
	"departments": "@@departments"
})
<!--POPUPS end-->

<!--[if lte IE 9]><script src="js/classList.min.js"></script><![endif]-->
<script src="js/jquery.min.js"></script>
<script src="js/libs.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/8.6.0/lazyload.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>