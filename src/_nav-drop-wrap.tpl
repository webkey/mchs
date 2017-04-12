@@if(context.start) {
@@if(context.dropLevel === '(==========1==========)') { <!--(1) START sub-menu FIRST level-->}
@@if(context.dropLevel === '(==========2==========)') { <!--(2) START sub-menu SECOND level-->}
@@if(context.dropLevel === '(==========3==========)') { <!--(3) START sub-menu THIRD level-->}
@@if(context.dropLevel === '(==========4==========)') { <!--(4) START sub-menu FOURTH level-->}

@@if(context.dropLevel === '(==========1==========)') { <div class="@@key__drop @@key-drop-js"><ul class="sub-@@key__list">}
@@if(context.dropLevel === '(==========2==========)') { <div class="@@key__drop @@key-drop-js"><ul class="sub-@@key__list">}
@@if(context.dropLevel === '(==========3==========)') { <div class="@@key__drop @@key-drop-js"><ul class="sub-@@key__list">}
@@if(context.dropLevel === '(==========4==========)') { <div class="@@key__drop @@key-drop-js"><ul class="sub-@@key__list">}
}

@@if(context.end) {
</ul></div>
@@if(context.dropLevel === '(==========1==========)') { <!--(1) END sub-menu FIRST level-->}
@@if(context.dropLevel === '(==========2==========)') { <!--(2) END sub-menu SECOND level--></li>}
@@if(context.dropLevel === '(==========3==========)') { <!--(3) END sub-menu THIRD level--></li>}
@@if(context.dropLevel === '(==========4==========)') { <!--(4) END sub-menu FOURTH level--></li>}
}