/*TMODJS:{"version":5,"md5":"ede2c67428a4561ded8304a7b8abacec"}*/
template('template_01',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$each=$utils.$each,users=$data.users,value=$data.value,$index=$data.$index,$escape=$utils.$escape,$out='';$each(users,function(value,$index){
$out+=' <li><a href="';
$out+=$escape(value.url);
$out+='">';
$out+=$escape(value.name);
$out+='</a></li> ';
});
return new String($out);
});