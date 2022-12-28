<script lang="ts">
	// import Counter from './Counter.svelte';
	import welcome from '$lib/images/hoai_phongggg.jpg';
	import { Col, Container, Row } from 'sveltestrap';
	import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';
  	import { Accordion, AccordionItem } from 'sveltestrap';
	import { Table } from 'sveltestrap';
	import { TabContent, TabPane } from 'sveltestrap';
	import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
	
</script>
<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact this app" />
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
</svelte:head>

<!-- <section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome} alt="Welcome" />
			</picture>
		</span>

		 to your new<br />SvelteKit app -->
	<!-- </h1> -->

	<!-- <h2> -->
		<!-- try editing <strong>src/routes/+page.svelte</strong> -->

	<!-- </h2> -->

	<!-- <Counter /> -->
<!-- </section> --> 
<!-- <style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	} */

	/* h1 {
		width: 100%;
	} */

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->

<Container class="container">
	<TabContent pills>
		<TabPane tabId="alpha" tab="Alpha" active>
		  <img class="anh"
			alt="Alpha Flight"
			src="https://scontent.fhan4-1.fna.fbcdn.net/v/t1.6435-1/141750606_123140022995026_4710703695795988991_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6YC4A6edOf0AX9D5_lr&_nc_ht=scontent.fhan4-1.fna&oh=00_AfCEZms0HxW-hluZxT7Ow0_FbMFihiwicJpyL63l6Ae4Cw&oe=63D2297A"
		  />
		</TabPane>
		<TabPane tabId="bravo" tab="Bravo">
		  <img class="anh"
			alt="Johnny Bravo"
			src="https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/306124172_1791075034591743_2564933685068885523_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=gk8gh9TMMNAAX_QfupU&_nc_ht=scontent.fhan3-3.fna&oh=00_AfD064PkQ6LLVkgTqkS64Gv06Vgy045DAVeD1Qx3JwwfsA&oe=63B08008"
		  />
		</TabPane>
		<TabPane tabId="charlie" tab="Charlie">
		  <img class="anh"
			alt="Charlie Brown"
			src="https://upload.wikimedia.org/wikipedia/en/2/22/Charlie_Brown.png"
		  />
		</TabPane>
	  </TabContent>
	<Table dark>
		<thead>
		  <tr>
			<th>#</th>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Username</th>
		  </tr>
		</thead>
		<tbody>
		  <tr>
			<th scope="row">1</th>
			<td>Đặng</td>
			<td>Thế</td>
			<td>Phong</td>
		  </tr>
		  <tr>
			<th scope="row">2</th>
			<td>Võ</td>
			<td>Đức</td>
			<td>Tính</td>
		  </tr>
		  <tr>
			<th scope="row">3</th>
			<td>Đỗ</td>
			<td>Hoàng</td>
			<td>Thượng</td>
		  </tr>
		</tbody>
	  </Table>
	<Row>
		<Col ><img src={welcome} alt="Welcome" /></Col>
		<Col><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
	</Row>
	<Row>
		<Col ><img src={welcome} alt="Welcome" /></Col>
		<Col ><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
	</Row>
	<Row>
		<Col ><img src={welcome} alt="Welcome" /></Col>
		<Col ><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
    	<Col ><img src={welcome} alt="Welcome" /></Col>
	</Row>
	<Card class="mb-3">
		<CardHeader>
		  <CardTitle>Võ Đức Tính (JungKook VN)</CardTitle>
		</CardHeader>
		<CardBody>
		  <CardSubtitle><img src={welcome} alt="Welcome" /></CardSubtitle>
		  <CardText>
			Some quick example text to build on the card title and make up the bulk of
			the card's content.
		  </CardText>
		  <Button>Button</Button>
		</CardBody>
		<CardFooter>
			
		</CardFooter>
	  </Card>
	  <!-- 

	   -->
	   <Accordion>
		<AccordionItem active header="Home">Fallbrook</AccordionItem>
		<AccordionItem header="School">
		  <a href="#home">Buena Vista Elementary</a>
		</AccordionItem>
		<AccordionItem header="Library">UCSB Library</AccordionItem>
	  </Accordion>
	  <h4>Large</h4>
	<Pagination size="lg" >
  <PaginationItem>
    <PaginationLink first href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink previous href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">1</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">2</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="#">3</PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink last href="#" />
  </PaginationItem>
</Pagination>
</Container>

<style>
	img{
		width: 100%;
		height: 300px;
		margin-bottom: 10px;
	}
	 /* .anh img {
		width: 100%;
		height: 500px;

	} */
</style>
