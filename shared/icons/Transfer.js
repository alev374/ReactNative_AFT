import React from 'react'
import Svg, { G, Path, Ellipse } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={props.size} height={props.size} viewBox='0 0 38 39' {...props}>
    <G fill="none" fillRule="evenodd" transform="translate(1 2)">
      <Path
        fill={props.color}
        d="M31.5 7.759H27a.643.643 0 1 1 0-1.286h3.857V2.571a.643.643 0 1 1 1.286 0v4.545a.643.643 0 0 1-.643.643zM3.857 33.473a.643.643 0 0 1-.643-.643v-4.544c0-.356.288-.643.643-.643h4.5a.643.643 0 1 1 0 1.286H4.5v3.901a.643.643 0 0 1-.643.643z"
      />
      <Path
        fill={props.color}
        d="M18 36c-5.732 0-10.99-2.636-14.425-7.232a.642.642 0 1 1 1.03-.77c3.19 4.269 8.073 6.716 13.395 6.716 9.216 0 16.714-7.497 16.714-16.714 0-2.806-.708-5.582-2.05-8.025a.643.643 0 0 1 1.128-.619A18.02 18.02 0 0 1 36 18c0 9.925-8.075 18-18 18zM2.482 26.425a.643.643 0 0 1-.575-.354A17.815 17.815 0 0 1 0 18C0 8.075 8.075 0 18 0a17.954 17.954 0 0 1 13.891 6.552.643.643 0 0 1-.992.818A16.67 16.67 0 0 0 18 1.286C8.784 1.286 1.286 8.783 1.286 18c0 2.635.595 5.157 1.77 7.493a.643.643 0 0 1-.574.932z"
      />
      <Path fill="#FFF" d="M5.786 11.571h24.429v12.857H5.786z" />
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M30.214 25.071H5.786a.643.643 0 0 1-.643-.642V11.57c0-.355.288-.642.643-.642h24.428c.355 0 .643.287.643.642v12.86a.643.643 0 0 1-.643.642zM6.43 23.786h23.14V12.214H6.43v11.572z"
      />
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M27 23.143H9a.643.643 0 0 1-.643-.643.643.643 0 0 0-.643-.643.643.643 0 0 1-.643-.643v-6.428c0-.356.288-.643.643-.643a.643.643 0 0 0 .643-.643c0-.355.288-.643.643-.643h18c.355 0 .643.288.643.643 0 .355.288.643.643.643.355 0 .643.287.643.643v6.428a.643.643 0 0 1-.643.643.643.643 0 0 0-.643.643.643.643 0 0 1-.643.643zM9.533 21.857h16.934a1.938 1.938 0 0 1 1.176-1.176V15.32a1.938 1.938 0 0 1-1.176-1.176H9.533a1.938 1.938 0 0 1-1.176 1.176v5.362a1.94 1.94 0 0 1 1.176 1.176z"
      />
      <Ellipse cx={18} cy={18} fill="#C2E4F8" rx={3.75} ry={4.5} />
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M18 23.143c-2.422 0-4.393-2.307-4.393-5.143s1.97-5.143 4.393-5.143c2.422 0 4.393 2.307 4.393 5.143s-1.97 5.143-4.393 5.143zm0-9c-1.713 0-3.107 1.73-3.107 3.857 0 2.127 1.394 3.857 3.107 3.857 1.713 0 3.107-1.73 3.107-3.857 0-2.127-1.394-3.857-3.107-3.857zm7.071 5.143a1.287 1.287 0 0 1 0-2.572 1.287 1.287 0 0 1 0 2.572zm-14.142 0a1.287 1.287 0 0 1 0-2.572 1.287 1.287 0 0 1 0 2.572z"
      />
      <Path
        fill="#FFF"
        d="M20.673 21.155c-.346-.285-.983-.738-1.622-.847a.197.197 0 0 1-.17-.197c.005-.106.005-.218.005-.335 0-.269.339-.592.357-.97.113-.222.177-.444.177-.616 0-.113-.029-.187-.08-.236.028-.14.051-.288.08-.441.116-.615-.109-1.058-.674-1.25-.205-.069-1.052-.209-1.367-.5-.115-.106-.036.488-.14.533-.554.238-.774.608-.66 1.217.03.153.053.301.08.441-.05.05-.08.123-.08.236 0 .172.065.394.178.617.018.377.357.681.357.969 0 .117 0 .23.004.335.005.098-.068.18-.169.197-.639.109-1.298.534-1.645.82.645.867 1.683 1.372 2.696 1.372a3.351 3.351 0 0 0 2.673-1.345z"
      />
      <Path
        fill={props.color}
        fillRule="nonzero"
        d="M18 23.143c-1.233 0-2.463-.625-3.211-1.632a.643.643 0 0 1 .107-.88c.192-.158.811-.634 1.56-.864a1.291 1.291 0 0 1-.066-.112c-.093-.17-.215-.393-.26-.669a1.995 1.995 0 0 1-.193-.796c0-.13.02-.24.05-.336l-.039-.222c-.146-.775.102-1.378.72-1.762.016-.23.077-.568.438-.715a.698.698 0 0 1 .708.135c.131.113.671.244.848.287.129.031.232.058.291.078.866.293 1.277 1.032 1.1 1.977l-.04.222c.03.095.05.207.05.336a2 2 0 0 1-.193.797c-.045.277-.169.507-.263.68-.02.036-.04.07-.057.105.606.195 1.153.575 1.532.887a.642.642 0 0 1 .107.88A3.991 3.991 0 0 1 18 23.143zm-1.709-1.909a2.747 2.747 0 0 0 1.709.623c.622 0 1.224-.22 1.7-.607-.276-.163-.536-.27-.756-.308a.84.84 0 0 1-.704-.86 5.94 5.94 0 0 0 .003-.302c0-.293.13-.532.233-.724.049-.09.122-.226.125-.28a.649.649 0 0 1 .068-.26c.06-.117.088-.209.1-.267a.641.641 0 0 1-.06-.42l.08-.435c.071-.38-.065-.459-.25-.522a3.075 3.075 0 0 0-.18-.045 8.397 8.397 0 0 1-.585-.16.672.672 0 0 1-.28.22c-.307.13-.336.225-.283.507l.08.436a.641.641 0 0 1-.06.42c.012.057.04.15.1.267.04.08.064.169.068.259.002.049.072.177.119.262.107.194.239.436.239.738 0 .11 0 .211.003.307a.84.84 0 0 1-.704.86c-.242.04-.512.152-.765.291z"
      />
    </G>
  </Svg>
)

export default SvgComponent
