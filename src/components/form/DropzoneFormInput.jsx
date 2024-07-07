import { Button, Card, Col, FormLabel, FormText } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import useFileUploader from '@/hooks/useFileUploader';
import IconifyIcon from '../wrappers/IconifyIcon';
const DropzoneFormInput = ({
  label,
  labelClassName,
  helpText,
  iconProps,
  showPreview,
  text,
  textClassName,
  onFileUpload
}) => {
  const {
    selectedFiles,
    handleAcceptedFiles,
    removeFile
  } = useFileUploader(showPreview);
  return <>
      {label && <FormLabel className={labelClassName}>{label}</FormLabel>}

      <Dropzone onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles, onFileUpload)} maxFiles={5}>
        {({
        getRootProps,
        getInputProps
      }) => <div className="dropzone dropzone-custom">
            <div className="dz-message" {...getRootProps()}>
              <input {...getInputProps()} />
              <IconifyIcon icon={iconProps?.icon ?? 'bx:cloud-upload'} {...iconProps} />
              <h3 className={textClassName}>{text}</h3>
              {helpText && typeof helpText === 'string' ? <FormText>{helpText}</FormText> : helpText}
            </div>
            {showPreview && selectedFiles.length > 0 && <div className="dz-preview row g-4">
                {(selectedFiles || []).map(file => <Col xl={2} md={4} sm={6} key={file.path}>
                    <Card className="p-2 mb-0 shadow-none border position-relative h-100">
                      {file.preview ? <img alt={file.path ?? ''} src={file.preview} height={90} width={140} className="rounded bg-light" /> : <div className="rounded bg-light text-center flex-centered fs-1" style={{
                height: 90,
                width: 140
              }}>
                          {file.path?.split('.')[file.path?.split('.').length - 1]?.toUpperCase()}
                        </div>}
                      <div className="mt-2">
                        <p role="button" className="text-body-secondary fw-bold">
                          {file.path ?? file.name}
                        </p>
                        <p className="mb-0 small">{file.formattedSize}</p>
                      </div>
                      {removeFile && <div className="position-absolute top-0 start-100 translate-middle">
                          <Button variant="danger" className="rounded-circle icon-sm p-0 d-flex align-items-center justify-content-center" onClick={() => removeFile(file)}>
                            <IconifyIcon icon="bx:x" />
                          </Button>
                        </div>}
                    </Card>
                  </Col>)}
              </div>}
          </div>}
      </Dropzone>
    </>;
};
export default DropzoneFormInput;