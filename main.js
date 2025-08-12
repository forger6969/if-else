let vopros = prompt('Hafta kunini yozing ')

if (vopros === 'dushanba') {
    alert('Bu haftaning 1 kuni')
} else if (vopros === 'seshanba') {
    alert('Bu hafatning 2 kuni')

} else if (vopros === 'seshanba') {
    alert('Bu hafatning 2 kuni')

} else if (vopros === 'chorshanba') {
    alert('Bu hafatning 3 kuni')

}
else if (vopros === 'payshanba') {
    alert('Bu hafatning 4 kuni')

}
else if (vopros === 'juma') {
    alert('Bu hafatning 5 kuni')

}
else if (vopros === 'shanba') {
    alert('Bu hafatning 6 kuni')

} else if (vopros === 'yakshanba') {
    alert('Bu hafatning 7 kuni')

}
else if (Number(vopros === '1')) {
    alert('Bu haftaning 1 kuni dushanba')
} else if (Number(vopros === '2')) {
    alert('Bu haftaning 2 kuni seshanba')
} else if (Number(vopros === '3')) {
    alert('Bu haftaning 3 kuni chorshanba')
} else if (Number(vopros === '4')) {
    alert('Bu haftaning 4 kuni payshanba')
} else if (Number(vopros === '5')) {
    alert('Bu haftaning 5 kuni juma')
} else if (Number(vopros === '6')) {
    alert('Bu haftaning 6 kuni shanba')
} else if (Number(vopros === '7')) {
    alert('Bu haftaning 7 kuni yakshanab')
} else { 
    alert('Bunday hafta kuni yoq')
}