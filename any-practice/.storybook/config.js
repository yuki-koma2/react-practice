// import { configure } from '@storybook/react';
//
// // automatically import all files ending in *.stories.js
// configure(require.context('../src/stories', true, /\.stories\.js$/), module);


import { addDecorator, configure } from '@storybook/react';
import '@ensemble-design/components/styles.scss';
import { withNotes } from '@storybook/addon-notes';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}
const newViewports = {
    tableRow: {
        name: 'table row',
        styles: {
            width: '1142px',
            height: '56px'
        }
    }
};

configureViewport({
    viewports: {
        ...INITIAL_VIEWPORTS,
        ...newViewports
    }
});

addDecorator(withNotes);

configure(loadStories, module);
