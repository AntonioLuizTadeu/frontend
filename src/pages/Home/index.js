import React , { useState} from 'react';
import {  SeatchArea,  PageArea } from './styled';
import { PageContainer } from '../../components/Maincomponents';
import { useApi } from  '../../helpers/OlxAPI';


const Page = ()  => {

    const api = useApi();   

    return (
         <> 
            <SeatchArea> 
                <PageContainer>
                  <div className="searchBox"> 
                     <form method="GET" action="/ads">
                          <input type="text" name="q" placeholder="O que você procura?" />
                          <select name="state"> 
                              
                          </select>
                          <button>Pesquisar</button>
                     </form>
                  </div>
                  <div className="categoryList"> 

                  </div>
                </PageContainer>
            </SeatchArea>

            <PageContainer>
                <PageArea>
                     .............               
                </PageArea>
            </PageContainer>

         </>
       
    );
}

export default Page;