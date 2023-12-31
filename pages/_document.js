import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="zxx">
				<Head>
					<link
						href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500,500i,600,600i,700,700i&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://res.cloudinary.com/dsj9t6adh/image/upload/v1689268874/hearts-with-paws-dogs-cats-paws-prints-dog-love-dogs_511024-69_qqqiv3.avif"
					></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
