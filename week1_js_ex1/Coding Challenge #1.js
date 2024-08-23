// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter)
var massM1 = 78
var heightM1 = 1.69
var massJ1 = 92
var heightJ1 = 1.95
var BMIM1 = massM1 / heightM1 ** 2
var BMIJ1 = massJ1 / heightJ1 ** 2
var markHigherBMI
if (BMIJ1 > BMIM1) markHigherBMI = true
else markHigherBMI = false

var massM2 = 95
var heightM2 = 1.888
var massJ2 = 85
var heightJ2 = 1.76
var BMIM2 = massM2 / heightM2 ** 2
var BMIJ2 = massJ2 / heightJ2 ** 2
if (BMIJ2 > BMIM2) markHigherBMI = true
else markHigherBMI = false