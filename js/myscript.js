let data = [{
    Header: 'Beetroot',
    Country: 'UK',
    Price: 45,
    Nutrition: 87,
    Category: 'Veg'
},
{
    Header: 'Tomato',
    Country: 'China',
    Price: 34,
    Nutrition: 107,
    Category: 'Veg'
}]

$(document).ready(function() {
    //anything inside will only run when the document is fully loaded and html is fully rendered

    $('body').prepend('<h1>Hello World</h1>')

    $('h1').addClass('newStyle')


  $('table').append(data.map(item => {
    return (
        `<tr>
            <th>${item.Header}</th>
            <td>${item.Country}</td>
            <td>${item.Price}</td>
            <td>${item.Nutrition}</td>
            <td>${item.Category}</td>
        </tr>
        `)
  }))

  $('tr:odd').addClass('alternate-rows')

  console.log($('h1').hasClass('newStyle'))
  console.log(data)
});

