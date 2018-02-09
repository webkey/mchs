<!-- >>> foot.tpl <<< -->
<!--FOOTER-->
@@include('_footer.tpl', {
	"depSite": "@@depSite"
})
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
	"depSite": "@@depSite"
})
<!--POPUPS end-->

<!--[if lte IE 9]><script src="js/classList.min.js"></script><![endif]-->
<script src="js/jquery.min.js"></script>
<script src="js/libs.min.js"></script>
<script src="js/common.js"></script>
</body>
</html>