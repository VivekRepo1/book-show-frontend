import { ComponentType } from 'react';

import Footer from '../common/footer/footer';

const withFooter = <P extends object>(
    WrappedComponent: ComponentType<P>
) => {
    return (props: P) => {
        return (
            <>
                <WrappedComponent {...props} />
                <Footer />
            </>
        );
    };
};

export default withFooter;
