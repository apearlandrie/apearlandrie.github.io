var product1 = document.getElementById('product1').textContent
      var qty1 = document.getElementById('qty1')
      var price1 = parseFloat(
        document.getElementById('price1').textContent.replace('Php', '').trim()
      )

      var product2 = document.getElementById('product2').textContent
      var qty2 = document.getElementById('qty2')
      var price2 = parseFloat(
        document.getElementById('price2').textContent.replace('Php', '').trim()
      )

      var product3 = document.getElementById('product3').textContent
      var qty3 = document.getElementById('qty3')
      var price3 = parseFloat(
        document.getElementById('price3').textContent.replace('Php', '').trim()
      )

      var product4 = document.getElementById('product4').textContent
      var qty4 = document.getElementById('qty4')
      var price4 = parseFloat(
        document.getElementById('price4').textContent.replace('Php', '').trim()
      )

      var carts = document.getElementById('carts')
      var total = document.getElementById('total')
      var cash = document.getElementById('cash')
      var change = document.getElementById('change')

      function addOrder() {
        carts.textContent = ''
        var totalPrice = 0

        if (parseFloat(qty1.value) > 0) {
          var order =
            qty1.value.toString() +
            ' pc/s x Php ' +
            price1 +
            ' ------ ' +
            product1 +
            ' ------ ' +
            parseFloat(qty1.value) * price1 +
            '\n'
          carts.textContent += order
          totalPrice += parseFloat(qty1.value) * price1
        }

        if (parseFloat(qty2.value) > 0) {
          var order =
            qty2.value.toString() +
            ' pc/s x Php ' +
            price2 +
            ' ------ ' +
            product2 +
            ' ------ ' +
            parseFloat(qty2.value) * price2 +
            '\n'
          carts.textContent += order
          totalPrice += parseFloat(qty2.value) * price2
        }

        if (parseFloat(qty3.value) > 0) {
          var order =
            qty3.value.toString() +
            ' pc/s x Php ' +
            price3 +
            ' ------ ' +
            product3 +
            ' ------ ' +
            parseFloat(qty3.value) * price3 +
            '\n'
          carts.textContent += order
          totalPrice += parseFloat(qty3.value) * price3
        }

        if (parseFloat(qty4.value) > 0) {
          var order =
            qty4.value.toString() +
            ' pc/s x Php ' +
            price4 +
            ' ------ ' +
            product4 +
            ' ------ ' +
            parseFloat(qty4.value) * price4 +
            '\n'
          carts.textContent += order
          totalPrice += parseFloat(qty4.value) * price4
        }

        total.value = 'Php ' + totalPrice.toFixed(2)

        cash.addEventListener('keyup', function () {
          var cashTendered = parseFloat(cash.value)
          var changeAmount = cashTendered - totalPrice
          if (!isNaN(changeAmount) && changeAmount >= 0) {
            change.value = 'Php ' + changeAmount.toFixed(2)
          } else {
            change.value = 'Php 0.00'
          }
        })
      }

      qty1.addEventListener('keyup', addOrder)
      qty2.addEventListener('keyup', addOrder)
      qty3.addEventListener('keyup', addOrder)
      qty4.addEventListener('keyup', addOrder)
