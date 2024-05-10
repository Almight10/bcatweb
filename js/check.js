const listWhitelist = [
    '0x063530a32ac7f25292ec245eaec442917dbb7e45',
    '0xD7dB9a70D526F3cB0DC39540D5D2825d6B89aC69',
    
      ];
      
      
      
        function myFunction() {
          let check = document.getElementById("walletchecker").value;
          const Whitelist = listWhitelist.includes(check);
          let text;
          if (Whitelist) {
            text = "You're eligible for $BCAT Airdrop";
          }
          else {
              text = "Oops! You're not eligible for $BCAT Airdrop";
          }
      
          document.getElementById("validate").innerHTML = text;
        }