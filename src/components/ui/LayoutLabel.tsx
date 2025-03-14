import React from "react";

const LayoutLabel = ({children}: {children: string}) => {
	return (
		<p className='pt-4 mb-1 text-sm font-medium text-secondary-foreground'>
			{children}
		</p>
	);
};

export default LayoutLabel;
