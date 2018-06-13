//Exercice 1 Faire une fonction qui retourne true.
function exo1()
{
	return(true);
}
//Exercice 2 Faire une fonction qui prend en paramètre une chaine de caractères et qui retourne cette même chaine.
function exo2() 
{
	var param1=" hello world ";
	
	document.write(param1);

}
//Exercice 3 Faire une fonction qui prend en paramètre deux chaines de caractères et qui revoit la concaténation de ces deux chaines
function exo3()
{
	var param1="hello world";
	var param2=", comment ça va ? ";

	document.write(param1+param2);
}
/*Exercice 4 Faire une fonction qui prend en paramètre deux nombres. La fonction doit retourner :

Le premier nombre est plus grand si le premier nombre est plus grand que le deuxième
Le premier nombre est plus petit si le premier nombre est plus petit que le deuxième
Les deux nombres sont identiques si les deux nombres sont égaux*/
function exo4()
{
	var msg="entrer un nombre"
	var nb1=prompt(msg);
	var nb2=prompt(msg);

	if(nb1>nb2)
		alert("Le premier nombre est plus grand");
	else if(nb1==nb2)
		alert("Les deux nombres sont identiques");
	else
		alert("Le premier nombre est plus petit");
}
//Exercice 5 Faire une fonction qui prend en paramètre un nombre et une chaine de caractères et qui renvoit la concaténation de ces deux paramètres.
function exo5()
{
	var param1=13;
	var param2=" Juin ";

	document.write(param1+param2);
}
/*Exercice 6 Faire une fonction qui prend trois paramètres : nom, prenom et age. Elle doit renvoyer une chaine de la forme :
"Bonjour" + nom + prenom + ",tu as" + age + "ans"*/
function exo6()
{
	var nom=" gouzenne ";
	var prenom=" dylan ";
	var age= 23;
	
	document.write("Bonjour" + nom + prenom + ",tu as " + age + " ans");
}
/*Exercice 7 Faire une fonction qui prend deux paramètres : age et genre. Le paramètre genre peut prendre comme valeur :
Homme
Femme
La fonction doit renvoyer en fonction des paramètres :
Vous êtes un homme et vous êtes majeur
Vous êtes un homme et vous êtes mineur
Vous êtes une femme et vous êtes majeur
Vous êtes une femme et vous êtes mineur*/
function exo7()
{
	var genre=prompt("vous êtes un homme ou une femme ?");
	var age=prompt("entrer votre age");

	if()


}
//Exercice 8 Faire une fonction qui prend en paramètre trois nombres et qui renvoit la somme de ces nombres.
function exo8()
{
	var nb1=1;
	var nb2=2;
	var nb3=3;
	var resultat=nb1+nb2+nb3;

	alert(resultat);


}
