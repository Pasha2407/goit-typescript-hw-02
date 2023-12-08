interface Props {
  name: string;
}

class Component<T extends Props> {
  constructor(public props: T) {

  }
}

class Page extends Component<{ name: string }> {
  pageInfo() {
    console.log(this.props.name);
  }
}

export { };
