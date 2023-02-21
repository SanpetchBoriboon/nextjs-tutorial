const Page = (props) => {
	const { title } = props;
	return (
		<div>
			<h1>{title}</h1>
			<div>
				<a href="">
					<img />
					<h2>Events in London</h2>
				</a>
				<a href="">
					<img />
					<h2>Events in San Francisco</h2>
				</a>
				<a href="">
					<img />
					<h2>Events in Thailand</h2>
				</a>
			</div>
		</div>
	);
};

export default Page;

export const getServerSideProps = () => {
	return {
		props: {
			title: 'Hello world!',
		},
	};
};
