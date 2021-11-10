import styled from "styled-components";

export const SeatchArea = styled.div` 
  background-color: #DDD;
  border-bottom:1px solid #CCC;
  padding:20px;

  .serachBox {
      background-color:#9BB83c;
      padding:20px 15px;
      border-radius:5px;
      box-shadow: 1px 1px 1px 0.3px rbga(0,0,0,0,0.2);

      form {
          flex:1;
          display:flex;

          input, select {
              height:40px;
              border:0;
              border-radius:5px;
              outline:0;
              font-size:15px;
              color:#000;
              margin-right:20px;
          }

          input {
                  flex:1;
                  padding:0 10px;
             }
           
            select {
                width:100px;
            }

           button {
                backgroud-color:#49AEEF;
                font-size:15px;
                border:0;
                border-radius:5px;
                color:#FFF;
                height:40px;
                padding:0 20px;
                cursor:pointer;

            }
      }
  }
`;

export const PageArea = styled.div` `;

 