import { Box } from '@chakra-ui/layout';
import AjaxForm from 'react-ajax-form';
import AjaxGetExample from './Ajaxget';
import StarRate from './Star';

export function Formdata() {
    return (
        <Box>
            <AjaxGetExample />
            <StarRate/>
        </Box>
    );
}
