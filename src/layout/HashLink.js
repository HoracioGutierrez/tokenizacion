import { forwardRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const CustomHashLink = forwardRef((props, ref) => {
    return <HashLink {...props} ref={ref} smooth />;
})

export default CustomHashLink