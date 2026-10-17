const VIDEO_URL = 'https://raw.githubusercontent.com/Yashraj741/K72_PROJECT/main/public/video.mp4'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video
          className='h-full w-full object-cover'
          autoPlay
          loop
          muted
          playsInline
          aria-hidden='true'
        >
          <source src={VIDEO_URL} type='video/mp4' />
        </video>
    </div>
  )
}

export default Video
