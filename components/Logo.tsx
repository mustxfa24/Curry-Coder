function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        src="https://media.licdn.com/dms/image/D5635AQEDCYkEf8YR2w/profile-framedphoto-shrink_200_200/0/1671587024769?e=1678420800&v=beta&t=kXZFCh-yKFLM3So4rrkH4ayBCrNAsjsfpZps5BbjMBg"
        alt="logo"
        className="rounded-full object-cover"
        width={50}
        height={50}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
