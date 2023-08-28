import React from 'react';
import './VariableHeights.css';

const VariableHeights = () => {
  return (
    // <div className='container-v'>
    //     <div className='item1-v'>This is a flex item</div>
    //     <div className='item2-v'>Elit dolore ea id fugiat fugiat aute quis ea irure veniam deserunt laboris incididunt pariatur. Ipsum qui ullamco ad nisi magna fugiat consequat voluptate consectetur ipsum. Do enim sunt enim Lorem minim. Ad nisi excepteur elit Lorem duis reprehenderit labore adipisicing est Lorem laboris eu voluptate. Adipisicing ut aliqua cupidatat cupidatat ex nostrud do non deserunt dolor incididunt mollit in. Non ipsum sit dolore esse aute occaecat magna cillum pariatur non officia ipsum in.</div>
    // </div>
    
    <div class="cards">
        <div class="card">
            <div class="body">
                <p>This is a flex item.</p>
            </div>
            <div class="footer">Footer</div>
        </div>
        <div class="card">
            <div class="body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur.</p>
            </div>
            <div class="footer">Footer</div>
        </div>
    </div>
  );
};

export default VariableHeights;