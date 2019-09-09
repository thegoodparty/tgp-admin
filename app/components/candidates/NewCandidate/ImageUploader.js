import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AvatarEditor from 'react-avatar-editor';
import Fab from '@material-ui/core/Fab';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  margin: 1rem 0;
`;
const ImageInput = styled.input`
  display: none;
`;

class ImageUploader extends React.Component {
  state = {
    image: null,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 0,
    preview: null,
    width: 200,
    height: 200,
    isSaved: false,
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
  };

  handlePreview = () => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    const { scale } = this.state;
    this.setState({
      preview: {
        img,
        scale,
        width: 200,
        height: 200,
      },
    });
  };

  handleSave = () => {
    const img = this.editor.getImageScaledToCanvas().toDataURL();
    this.props.saveCallback(img);
    this.setState({
      preview: {
        img,
      },
      isSaved: true,
    });
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  rotateLeft = e => {
    e.preventDefault();

    const { rotate } = this.state;
    this.setState(prevState => ({
      ...prevState,
      rotate: rotate - 90,
    }));
  };

  rotateRight = e => {
    e.preventDefault();
    const { rotate } = this.state;
    this.setState(prevState => ({
      ...prevState,
      rotate: rotate + 90,
    }));
  };

  setEditorRef = editor => {
    if (editor) this.editor = editor;
  };

  render() {
    return (
      <Wrapper>
        {this.state.isSaved ? (
          <div>
            <h4>Saved!</h4>
            <img src={this.state.preview.img} alt="saved" />
          </div>
        ) : (
          <div>
            <Wrapper>
              <ImageInput
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={this.handleNewImage}
              />
              <label htmlFor="contained-button-file">
                <Button color="primary" variant="contained" component="span">
                  Select Photo
                </Button>
              </label>
            </Wrapper>
            {this.state.image && (
              <>
                <Wrapper>
                  <AvatarEditor
                    ref={this.setEditorRef}
                    scale={parseFloat(this.state.scale)}
                    width={this.state.width}
                    height={this.state.height}
                    rotate={parseFloat(this.state.rotate)}
                    image={this.state.image}
                    className="editor-canvas"
                  />
                </Wrapper>

                <Wrapper>
                  Zoom: &nbsp;
                  <input
                    name="scale"
                    type="range"
                    onChange={this.handleScale}
                    min={this.state.allowZoomOut ? '0.1' : '1'}
                    max="2"
                    step="0.01"
                    defaultValue="1"
                  />
                </Wrapper>
                <Wrapper>
                  Rotate: &nbsp;
                  <Fab
                    color="primary"
                    aria-label="rotateLeft"
                    onClick={this.rotateLeft}
                  >
                    <RotateLeftIcon />
                  </Fab>
                  &nbsp;
                  <Fab
                    color="primary"
                    aria-label="rotateRight"
                    onClick={this.rotateRight}
                  >
                    <RotateRightIcon />
                  </Fab>
                </Wrapper>
                <Wrapper>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.handlePreview}
                  >
                    Preview
                  </Button>
                  &nbsp; &nbsp;
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleSave}
                  >
                    Save Image
                  </Button>
                  <Wrapper>
                    {!!this.state.preview && (
                      <img src={this.state.preview.img} alt="preview" />
                    )}
                  </Wrapper>
                </Wrapper>
              </>
            )}
          </div>
        )}
      </Wrapper>
    );
  }
}

ImageUploader.propTypes = {
  saveCallback: PropTypes.func,
};

export default ImageUploader;
