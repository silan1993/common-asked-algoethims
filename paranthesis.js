function _printParenthesis( str , pos , n , open , close)
    {
        if (close == n)
        {
         
            // prvar the possible combinations
            for (let i = 0; i < str.length; i++)
                console.log(str[i]);
                console.log("\n");
            return;
        }
        else
        {
            if (open > close)
            {
                str[pos] = '}';
                _printParenthesis(str, pos + 1, n, open, close + 1);
            }
            if (open < n)
            {
                str[pos] = '{';
                _printParenthesis(str, pos + 1, n, open + 1, close);
            }
        }
    }
 
    // Wrapper over _printParenthesis()
    function printParenthesis( str , n)
    {
        if (n > 0)
            _printParenthesis(str, 0, n, 0, 0);
        return;
    }
 
    // Driver program
    var n = 3;
    var str = new Array(2 * n);
    printParenthesis(str, n);