/*TMODJS:{"version":13,"md5":"df7473716fafd2453287e2b445938a03"}*/
template('template_02',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,users=$data.users,$value=$data.$value,$index=$data.$index,$escape=$utils.$escape,$out='';$each(users,function($value,$index){
$out+=' <li>';
$out+=$escape($index);
$out+='-';
$out+=$escape($value.name);
$out+='</li> ';
});
return new String($out);
});