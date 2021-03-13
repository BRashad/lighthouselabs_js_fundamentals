const moneys =
  [ { face: 'fiftyDollar',  val: 50   *100 }
  , { face: 'twentyDollar', val: 20   *100 }
  , { face: 'tenDollar',    val: 10   *100 }
  , { face: 'twoDollar',    val:  2   *100 }
  , { face: 'oneDollar',    val:  1   *100 }
  , { face: 'quarter',      val:  .25 *100 }
  , { face: 'dime',         val:  .1  *100 }
  , { face: 'penny',        val:  .01 *100 }
  ]

const calculateChange = (total, cash) =>
  {
  let result = {}
    , change = cash - total  
    ;
  moneys.forEach( ({face,val}) =>
    {
    let count = Math.floor(change / val)
    change   %= val
    if (count > 0) result[face] = count
    })
  return result
  }

console.log( JSON.stringify( calculateChange( 2623, 4000 )) )