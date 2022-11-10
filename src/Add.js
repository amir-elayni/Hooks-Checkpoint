import React, { useState } from 'react'
import {Modal,Button,Form,Col,Row} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';


const Add = ({show,handleClose,addMovie,setRate}) => {

  const onStarClick=(nextValue,prevValue,name)=>{

    setNewMovie({...newMovie,rate:nextValue})

    setRate(nextValue);
   }
  

    const [newMovie, setNewMovie] = useState({
        main_img:"",
        title:"",
        rate:1,
        genre:"",
        description:"",
        duration:"",
        date:""


    });

    const handleChange=(e)=>{

    setNewMovie({...newMovie,[e.target.name]:e.target.value})


    }

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Movie Title"  onChange={handleChange} name="title"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Image URL" onChange={handleChange} name="main_img" />
        </Form.Group>
      </Row>
      <StarRatingComponent
          name="rate1" 
          starCount={5}
          value={newMovie.rate}
          onStarClick={onStarClick}
          starColor={"gold"}
  
        />

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Resume</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={handleChange} name="description" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity"  >
          <Form.Label>Duration</Form.Label>
          <Form.Control onChange={handleChange} name="duration" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState" >
          <Form.Label>Genre</Form.Label>
          <Form.Control as="select" defaultValue="Genre" onChange={handleChange} name="genre" >
          <option></option>
            <option>Action</option>
            <option>Science Fiction </option>
            <option>Adventure </option>
            <option>Thriller </option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip"  >
          <Form.Label>Date</Form.Label>
          <Form.Control  onChange={handleChange} name="date"/>
        </Form.Group>
      </Row>

    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  id="sub" variant="primary" onClick={()=> { addMovie(newMovie);handleClose()}} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Add
