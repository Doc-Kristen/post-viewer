import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Spinner from './index'

describe('Component: Spinner', () => {
	it('should render correctly', () => {
		render(
			<MemoryRouter>
				<Spinner />
			</MemoryRouter>,
		)
		const element = screen.getByTestId('spinner')
		expect(element).toBeInTheDocument()

		expect(element).toMatchInlineSnapshot(`
			<div
			  class="MuiBox-root css-3hcm5q"
			  data-testid="spinner"
			>
			  <div>
			    <svg
			      height="158"
			      preserveAspectRatio="xMidYMid meet"
			      style="width: 100%; height: 100%; transform: translate3d(0,0,0); content-visibility: visible;"
			      viewBox="0 0 211 158"
			      width="211"
			      xmlns="http://www.w3.org/2000/svg"
			      xmlns:xlink="http://www.w3.org/1999/xlink"
			    >
			      <defs>
			        <clippath
			          id="__lottie_element_2"
			        >
			          <rect
			            height="158"
			            width="211"
			            x="0"
			            y="0"
			          />
			        </clippath>
			        <clippath
			          id="__lottie_element_19"
			        >
			          <path
			            d="M0,0 L300,0 L300,300 L0,300z"
			          />
			        </clippath>
			        <clippath
			          id="__lottie_element_29"
			        >
			          <path
			            d="M0,0 L300,0 L300,300 L0,300z"
			          />
			        </clippath>
			        <clippath
			          id="__lottie_element_39"
			        >
			          <path
			            d="M0,0 L300,0 L300,300 L0,300z"
			          />
			        </clippath>
			      </defs>
			      <g
			        clip-path="url(#__lottie_element_2)"
			      >
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(-0.18278707563877106,0.08117195963859558,-0.08117195963859558,-0.18278707563877106,78.31253814697266,103.57566833496094)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,58.4379997253418,-78.625)"
			          >
			            <path
			              d=" M1.3329999446868896,-1.0770000219345093 C4.997000217437744,-0.2240000069141388 7.2820000648498535,3.4110000133514404 6.436999797821045,7.041999816894531 C5.5920000076293945,10.67300033569336 1.9359999895095825,12.923999786376953 -1.7280000448226929,12.071000099182129 C-5.392000198364258,11.218000411987305 -7.677999973297119,7.583000183105469 -6.833000183105469,3.9519999027252197 C-5.98799991607666,0.32100000977516174 -2.3310000896453857,-1.9299999475479126 1.3329999446868896,-1.0770000219345093z"
			              fill="rgb(255,255,255)"
			              fill-opacity="1"
			            />
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M79.697998046875,-69.52999877929688 C79.697998046875,-69.52999877929688 70.8759994506836,-83.86499786376953 61.507999420166016,-85.44499969482422 C52.13999938964844,-87.0250015258789 23.509000778198242,-88.64299774169922 23.509000778198242,-88.64299774169922 C23.509000778198242,-88.64299774169922 20.347999572753906,-69.90699768066406 20.347999572753906,-69.90699768066406 C20.347999572753906,-69.90699768066406 47.92599868774414,-62.042999267578125 57.29399871826172,-60.4630012512207 C66.66200256347656,-58.882999420166016 79.697998046875,-69.52999877929688 79.697998046875,-69.52999877929688z M53.154998779296875,-74.00800323486328 C53.66400146484375,-77.0260009765625 56.52399826049805,-79.05999755859375 59.54199981689453,-78.5510025024414 C62.560001373291016,-78.04199981689453 64.59400177001953,-75.18199920654297 64.08499908447266,-72.16400146484375 C63.57600021362305,-69.14600372314453 60.715999603271484,-67.11199951171875 57.698001861572266,-67.62100219726562 C54.68000030517578,-68.12999725341797 52.645999908447266,-70.98999786376953 53.154998779296875,-74.00800323486328z"
			              fill="rgb(97,196,242)"
			              fill-opacity="1"
			            />
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M39.88999938964844,-86.68800354003906 C39.345001220703125,-86.81500244140625 38.84299850463867,-87.13300323486328 38.49399948120117,-87.6240005493164 C38.49399948120117,-87.6240005493164 33.87300109863281,-94.12200164794922 33.87300109863281,-94.12200164794922 C33.87300109863281,-94.12200164794922 25.475000381469727,-95.53700256347656 25.475000381469727,-95.53700256347656 C24.17799949645996,-95.76100158691406 23.30900001525879,-96.9800033569336 23.527000427246094,-98.27400207519531 C23.7450008392334,-99.56800079345703 24.97100067138672,-100.43900299072266 26.263999938964844,-100.22100067138672 C26.263999938964844,-100.22100067138672 35.63199996948242,-98.64199829101562 35.63199996948242,-98.64199829101562 C36.268001556396484,-98.53500366210938 36.80799865722656,-98.18900299072266 37.17300033569336,-97.6760025024414 C37.17300033569336,-97.6760025024414 42.3650016784668,-90.37699890136719 42.3650016784668,-90.37699890136719 C43.125999450683594,-89.30799865722656 42.875,-87.8239974975586 41.80699920654297,-87.06500244140625 C41.229000091552734,-86.65299987792969 40.529998779296875,-86.53900146484375 39.88999938964844,-86.68800354003906z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M51.262001037597656,-59.33300018310547 C39.5989990234375,-62.04800033569336 21.408000946044922,-67.22599792480469 20.47800064086914,-67.49099731445312 C19.31399917602539,-67.8219985961914 18.584999084472656,-68.97599792480469 18.78700065612793,-70.16899871826172 C18.78700065612793,-70.16899871826172 21.94700050354004,-88.90599822998047 21.94700050354004,-88.90599822998047 C22.148000717163086,-90.10099792480469 23.21500015258789,-90.9489974975586 24.42300033569336,-90.88200378417969 C25.597999572753906,-90.81600189208984 53.29399871826172,-89.23899841308594 62.683998107910156,-87.65499877929688 C73.01699829101562,-85.91100311279297 82.11900329589844,-71.26699829101562 82.50199890136719,-70.6449966430664 C83.1259994506836,-69.63099670410156 82.90299987792969,-68.31199645996094 81.98200225830078,-67.55999755859375 C81.41500091552734,-67.09600067138672 67.99199676513672,-56.255001068115234 57.68000030517578,-57.9900016784668 C56.007999420166016,-58.270999908447266 53.78799819946289,-58.744998931884766 51.262001037597656,-59.33300018310547z M23.825000762939453,-71.48100280761719 C30.3700008392334,-69.64099884033203 50.80699920654297,-63.96500015258789 58.470001220703125,-62.67300033569336 C64.375,-61.678001403808594 72.9010009765625,-66.76200103759766 77.2770004272461,-69.93900299072266 C74.18000030517578,-74.375 67.80899810791016,-81.9729995727539 61.89400100708008,-82.97100067138672 C54.233001708984375,-84.26399993896484 33.06399917602539,-85.60700225830078 26.277000427246094,-86.01499938964844 C26.277000427246094,-86.01499938964844 23.825000762939453,-71.48100280761719 23.825000762939453,-71.48100280761719z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M19.007999420166016,-58.09400177001953 C17.79599952697754,-58.375999450683594 16.99799919128418,-59.55799865722656 17.207000732421875,-60.801998138427734 C17.424999237060547,-62.09600067138672 18.649999618530273,-62.96799850463867 19.944000244140625,-62.749000549316406 C19.944000244140625,-62.749000549316406 28.341999053955078,-61.33300018310547 28.341999053955078,-61.33300018310547 C28.341999053955078,-61.33300018310547 34.8390007019043,-65.9540023803711 34.8390007019043,-65.9540023803711 C35.909000396728516,-66.71600341796875 37.39099884033203,-66.46399688720703 38.1510009765625,-65.39600372314453 C38.9119987487793,-64.32599639892578 38.6609992980957,-62.84299850463867 37.59299850463867,-62.08399963378906 C37.59299850463867,-62.08399963378906 30.29400062561035,-56.893001556396484 30.29400062561035,-56.893001556396484 C29.7810001373291,-56.52799987792969 29.143999099731445,-56.38100051879883 28.52199935913086,-56.486000061035156 C28.52199935913086,-56.486000061035156 19.15399932861328,-58.064998626708984 19.15399932861328,-58.064998626708984 C19.104999542236328,-58.073001861572266 19.055999755859375,-58.08300018310547 19.007999420166016,-58.09400177001953z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M11.74899959564209,-72.16500091552734 C11.185999870300293,-72.2959976196289 10.689000129699707,-72.62699890136719 10.35200023651123,-73.10099792480469 C9.987000465393066,-73.61499786376953 9.84000015258789,-74.25299835205078 9.944999694824219,-74.87300109863281 C9.944999694824219,-74.87300109863281 12.053000450134277,-87.36399841308594 12.053000450134277,-87.36399841308594 C12.157999992370605,-87.98600006103516 12.503999710083008,-88.54000091552734 13.017999649047852,-88.90499877929688 C13.531999588012695,-89.2699966430664 14.168999671936035,-89.41699981689453 14.789999961853027,-89.31199645996094 C14.789999961853027,-89.31199645996094 24.158000946044922,-87.73100280761719 24.158000946044922,-87.73100280761719 C25.43000030517578,-87.49700164794922 26.322999954223633,-86.28800201416016 26.104999542236328,-84.99299621582031 C25.886999130249023,-83.69999694824219 24.660999298095703,-82.8290023803711 23.368000030517578,-83.0469970703125 C23.368000030517578,-83.0469970703125 16.340999603271484,-84.23200225830078 16.340999603271484,-84.23200225830078 C16.340999603271484,-84.23200225830078 15.024999618530273,-76.4260025024414 15.024999618530273,-76.4260025024414 C15.024999618530273,-76.4260025024414 22.051000595092773,-75.24099731445312 22.051000595092773,-75.24099731445312 C23.336000442504883,-75.0270004272461 24.215999603271484,-73.7959976196289 23.99799919128418,-72.50399780273438 C23.780000686645508,-71.20999908447266 22.55500030517578,-70.33799743652344 21.26099967956543,-70.55699920654297 C21.26099967956543,-70.55699920654297 11.892000198364258,-72.13600158691406 11.892000198364258,-72.13600158691406 C11.843999862670898,-72.14399719238281 11.795999526977539,-72.15399932861328 11.74899959564209,-72.16500091552734z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M3.5789999961853027,-72.7490005493164 C-1.2510000467300415,-73.87300109863281 -11.132177352905273,-81.51483917236328 -13.109177589416504,-83.07083892822266 C-13.791177749633789,-83.60883331298828 -14.125177383422852,-84.47683715820312 -13.98117733001709,-85.33184051513672 C-13.836177825927734,-86.18883514404297 -13.236177444458008,-86.89783477783203 -12.415177345275879,-87.18183898925781 C-9.973177909851074,-88.02684020996094 2.441999912261963,-92.19599914550781 7.113999843597412,-91.40799713134766 C8.38700008392334,-91.1729965209961 9.279000282287598,-89.96399688720703 9.060999870300293,-88.6719970703125 C8.843000411987305,-87.37799835205078 7.617000102996826,-86.50700378417969 6.323999881744385,-86.7249984741211 C4.355000019073486,-87.05599975585938 -1.4451775550842285,-85.63683319091797 -6.5651774406433105,-84.08184051513672 C-2.240177631378174,-80.9348373413086 2.759000062942505,-77.73200225830078 4.744999885559082,-77.35700225830078 C6.035999774932861,-77.1449966430664 6.909999847412109,-75.91200256347656 6.691999912261963,-74.62000274658203 C6.473999977111816,-73.32599639892578 5.247000217437744,-72.4540023803711 3.9539999961853027,-72.6729965209961 C3.8329999446868896,-72.69300079345703 3.7079999446868896,-72.71900177001953 3.5789999961853027,-72.7490005493164z"
			                fill="rgb(248,100,100)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(1,0,0,1,110,76)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,-12.375,14.125)"
			          >
			            <path
			              d=" M0,-45.875 C25.31841278076172,-45.875 45.875,-25.31841278076172 45.875,0 C45.875,25.31841278076172 25.31841278076172,45.875 0,45.875 C-25.31841278076172,45.875 -45.875,25.31841278076172 -45.875,0 C-45.875,-25.31841278076172 -25.31841278076172,-45.875 0,-45.875z"
			              fill="rgb(255,255,255)"
			              fill-opacity="1"
			            />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(1,0,0,1,110,76)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M33.391998291015625,13.968000411987305 C33.391998291015625,-1.4490000009536743 25.78700065612793,-15.081000328063965 14.130999565124512,-23.409000396728516 C10.677000045776367,-24.32900047302246 7.051000118255615,-24.826000213623047 3.306999921798706,-24.826000213623047 C-19.867000579833984,-24.826000213623047 -38.65299987792969,-6.039999961853027 -38.65299987792969,17.134000778198242 C-38.65299987792969,38.42300033569336 -22.79400062561035,55.99700164794922 -2.247999906539917,58.71699905395508 C18.160999298095703,54.04800033569336 33.391998291015625,35.792999267578125 33.391998291015625,13.968000411987305z"
			              fill="rgb(248,100,100)"
			              fill-opacity="1"
			            />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(1,0,0,1,110,76)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,-12.375,14.125)"
			          >
			            <path
			              d=" M0,-45.875 C25.31841278076172,-45.875 45.875,-25.31841278076172 45.875,0 C45.875,25.31841278076172 25.31841278076172,45.875 0,45.875 C-25.31841278076172,45.875 -45.875,25.31841278076172 -45.875,0 C-45.875,-25.31841278076172 -25.31841278076172,-45.875 0,-45.875z"
			              fill-opacity="0"
			              stroke="rgb(38,51,87)"
			              stroke-linecap="butt"
			              stroke-linejoin="miter"
			              stroke-miterlimit="4"
			              stroke-opacity="1"
			              stroke-width="5"
			            />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(1,0,0,1,110,76)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M-74.75,-27.125 C-82.25,-24.75 -86.875,-25.625 -87.125,-18.75 C-87.375,-11.875 -81.75,-4.75 -79.875,-1.875 C-78,1 -55.375,16.75 -51.75,19.75 C-48.125,22.75 -28.375,33.625 -27.875,34.125 C-27.375,34.625 1.125,46 3.875,47.625 C6.625,49.25 35.125,53.375 40.75,54.5 C46.375,55.625 57.85499954223633,52.007999420166016 60,49.375 C62.75,46 64.5,39.25 55.5,29.125 C46.5,19 42.375,17.625 42,17.625 C41.625,17.625 36.625,13.437999725341797 36.125,16.312999725341797 C35.5629997253418,18.750999450683594 35.25,21.625 35.25,21.625 C35.25,21.625 49.5,33 47.125,37.5 C44.75,42 38.5,41.875 35.125,41.875 C31.75,41.875 9.25,38 6.125,36.375 C3,34.75 -35.625,17.875 -36.625,16.375 C-37.625,14.875 -65,-2.625 -66.375,-5.875 C-67.75,-9.125 -71.625,-16.875 -70.5,-17.125 C-69.375,-17.375 -56.75,-19 -56.75,-19 C-56.75,-19 -46.875,-17.875 -46.875,-17.875 C-46.875,-17.875 -44.5,-23.5 -44.5,-23.5 C-44.5,-23.5 -67.25,-29.5 -74.75,-27.125z"
			              fill="rgb(255,255,255)"
			              fill-opacity="1"
			            />
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M42.84400177001953,57.06700134277344 C25.051000595092773,57.06700134277344 -1.1009999513626099,49.236000061035156 -24.642000198364258,38.27399826049805 C-57.777000427246094,22.847000122070312 -83.62000274658203,2.6440000534057617 -88.9489974975586,-11.996000289916992 C-90.33300018310547,-15.79800033569336 -90.3499984741211,-19.19300079345703 -89,-22.08300018310547 C-84.5530014038086,-31.60700035095215 -66.677001953125,-32.994998931884766 -39.96200180053711,-25.90399932861328 C-38.69499969482422,-25.566999435424805 -37.939998626708984,-24.266000747680664 -38.277000427246094,-22.99799919128418 C-38.612998962402344,-21.729999542236328 -39.909000396728516,-20.97100067138672 -41.18299865722656,-21.31100082397461 C-64.03199768066406,-27.381999969482422 -81.51799774169922,-26.884000778198242 -84.69599914550781,-20.072999954223633 C-85.49299621582031,-18.367000579833984 -85.4219970703125,-16.195999145507812 -84.48500061035156,-13.621000289916992 C-79.63600158691406,-0.30000001192092896 -54.202999114990234,19.270000457763672 -22.63599967956543,33.96900177001953 C19.624000549316406,53.64699935913086 54.62300109863281,56.676998138427734 58.71900177001953,46.70000076293945 C62.1879997253418,38.25 46.45800018310547,24.69499969482422 32.93299865722656,13.569999694824219 C31.920000076293945,12.736000061035156 31.774999618530273,11.239999771118164 32.608001708984375,10.22700023651123 C33.441001892089844,9.21399974822998 34.86000061035156,9.17300033569336 35.95100021362305,9.902000427246094 C53.8380012512207,21.856000900268555 67.43800354003906,37.8129997253418 63.02299880981445,48.709999084472656 C60.59700012207031,54.698001861572266 52.902000427246094,57.06700134277344 42.84400177001953,57.06700134277344z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M37.98899841308594,44.8489990234375 C34.4119987487793,44.8489990234375 30.05299949645996,44.31700134277344 24.92099952697754,43.25 C12.373000144958496,40.64500045776367 -3.309000015258789,35.11600112915039 -19.233999252319336,27.684999465942383 C-49.630001068115234,13.498000144958496 -77.82599639892578,-6.390999794006348 -72.90499877929688,-16.95400047302246 C-71.05599975585938,-20.922000885009766 -64.93800354003906,-22.062999725341797 -45.11800003051758,-20.531999588012695 C-43.810001373291016,-20.430999755859375 -42.87900161743164,-19.204999923706055 -43.02799987792969,-17.900999069213867 C-43.176998138427734,-16.597999572753906 -44.36399841308594,-15.647000312805176 -45.65700149536133,-15.812000274658203 C-57.65599822998047,-17.4060001373291 -67.98100280761719,-16.277000427246094 -68.5979995727539,-14.946999549865723 C-70.83799743652344,-10.140999794006348 -51.9379997253418,7.177999973297119 -17.225000381469727,23.3799991607666 C-1.6230000257492065,30.66200065612793 13.687000274658203,36.066001892089844 25.88599967956543,38.599998474121094 C39.577999114990234,41.441001892089844 44.42399978637695,39.643001556396484 45.12799835205078,38.13100051879883 C45.832000732421875,36.619998931884766 44.095001220703125,31.74799919128418 33.11600112915039,23.075000762939453 C32.08599853515625,22.26300048828125 31.910999298095703,20.770000457763672 32.7239990234375,19.739999771118164 C33.5369987487793,18.709999084472656 35.03099822998047,18.534000396728516 36.060001373291016,19.349000930786133 C47.244998931884766,28.183000564575195 51.744998931884766,35.17900085449219 49.435001373291016,40.138999938964844 C47.972999572753906,43.277000427246094 44.13800048828125,44.8489990234375 37.98899841308594,44.8489990234375z"
			                fill="rgb(38,51,87)"
			                fill-opacity="1"
			              />
			            </g>
			          </g>
			        </g>
			        <g
			          clip-path="url(#__lottie_element_39)"
			          style="display: none;"
			        >
			          <g
			            style="display: none;"
			          >
			            <g>
			              <path
			                fill-opacity="0"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			              />
			            </g>
			          </g>
			          <g
			            style="display: none;"
			          >
			            <g>
			              <path
			                fill-opacity="0"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			              />
			            </g>
			          </g>
			        </g>
			        <g
			          clip-path="url(#__lottie_element_29)"
			          opacity="1"
			          style="display: block;"
			          transform="matrix(1,0,0,1,-40,-74)"
			        >
			          <g
			            opacity="1"
			            style="display: block;"
			            transform="matrix(1,0,0,1,150,150)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M-30.131999969482422,26.07900047302246 C-18.863000869750977,31.55900001525879 -5.7210001945495605,37.52899932861328 -1.75,39 C-1.4800000190734863,39.099998474121094 -1.1890000104904175,39.20600128173828 -0.8759999871253967,39.31800079345703"
			                fill-opacity="0"
			                stroke="rgb(38,51,87)"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			                stroke-opacity="1"
			                stroke-width="2"
			              />
			            </g>
			          </g>
			          <g
			            opacity="1"
			            style="display: block;"
			            transform="matrix(1,0,0,1,150,150)"
			          >
			            <g
			              opacity="1"
			              transform="matrix(1,0,0,1,0,0)"
			            >
			              <path
			                d=" M-73.88500213623047,-4.239999771118164 C-66.18699645996094,4.138000011444092 -54.35200119018555,12.04800033569336 -48.89699935913086,15.836999893188477"
			                fill-opacity="0"
			                stroke="rgb(38,51,87)"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			                stroke-opacity="1"
			                stroke-width="2"
			              />
			            </g>
			          </g>
			        </g>
			        <g
			          clip-path="url(#__lottie_element_19)"
			          style="display: none;"
			        >
			          <g
			            style="display: none;"
			          >
			            <g>
			              <path
			                fill-opacity="0"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			              />
			            </g>
			          </g>
			          <g
			            style="display: none;"
			          >
			            <g>
			              <path
			                fill-opacity="0"
			                stroke-linecap="round"
			                stroke-linejoin="miter"
			                stroke-miterlimit="4"
			              />
			            </g>
			          </g>
			        </g>
			        <g
			          style="display: none;"
			        >
			          <g>
			            <path />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(0.9804711937904358,0,0,0.9804711937904358,111.40072631835938,76.10198211669922)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M71.91500091552734,-6.2789998054504395 C71.91500091552734,-6.2789998054504395 74.13300323486328,-2.11899995803833 74.13300323486328,-2.11899995803833 C75.2969970703125,0.06300000101327896 77.07099914550781,1.8700000047683716 79.24400329589844,3.0889999866485596 C79.24400329589844,3.0889999866485596 83.38700103759766,5.413000106811523 83.38700103759766,5.413000106811523 C83.38700103759766,5.413000106811523 79.16999816894531,7.598999977111816 79.16999816894531,7.598999977111816 C76.95800018310547,8.746000289916992 75.1259994506836,10.494000434875488 73.89199829101562,12.63700008392334 C73.89199829101562,12.63700008392334 71.53800201416016,16.722999572753906 71.53800201416016,16.722999572753906 C71.53800201416016,16.722999572753906 69.31900024414062,12.562000274658203 69.31900024414062,12.562000274658203 C68.15499877929688,10.380000114440918 66.38099670410156,8.571999549865723 64.20800018310547,7.354000091552734 C64.20800018310547,7.354000091552734 60.064998626708984,5.031000137329102 60.064998626708984,5.031000137329102 C60.064998626708984,5.031000137329102 64.28199768066406,2.8440001010894775 64.28199768066406,2.8440001010894775 C66.49400329589844,1.6970000267028809 68.32599639892578,-0.050999999046325684 69.56099700927734,-2.194000005722046 C69.56099700927734,-2.194000005722046 71.91500091552734,-6.2789998054504395 71.91500091552734,-6.2789998054504395z"
			              fill="rgb(97,196,242)"
			              fill-opacity="1"
			            />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(0,0,0,0,184.89300537109375,35.303001403808594)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M75.0260009765625,-48.82699966430664 C75.0260009765625,-48.82699966430664 76.59500122070312,-45.88600158691406 76.59500122070312,-45.88600158691406 C77.41799926757812,-44.34400177001953 78.6709976196289,-43.066001892089844 80.20700073242188,-42.20500183105469 C80.20700073242188,-42.20500183105469 83.13600158691406,-40.5620002746582 83.13600158691406,-40.5620002746582 C83.13600158691406,-40.5620002746582 80.15499877929688,-39.016998291015625 80.15499877929688,-39.016998291015625 C78.59100341796875,-38.20600128173828 77.2969970703125,-36.970001220703125 76.42400360107422,-35.45500183105469 C76.42400360107422,-35.45500183105469 74.76000213623047,-32.56700134277344 74.76000213623047,-32.56700134277344 C74.76000213623047,-32.56700134277344 73.19100189208984,-35.507999420166016 73.19100189208984,-35.507999420166016 C72.36799621582031,-37.05099868774414 71.11499786376953,-38.32899856567383 69.5790023803711,-39.189998626708984 C69.5790023803711,-39.189998626708984 66.6500015258789,-40.832000732421875 66.6500015258789,-40.832000732421875 C66.6500015258789,-40.832000732421875 69.63099670410156,-42.37799835205078 69.63099670410156,-42.37799835205078 C71.19499969482422,-43.18899917602539 72.48899841308594,-44.42399978637695 73.36199951171875,-45.93899917602539 C73.36199951171875,-45.93899917602539 75.0260009765625,-48.82699966430664 75.0260009765625,-48.82699966430664z"
			              fill="rgb(97,196,242)"
			              fill-opacity="1"
			            />
			          </g>
			        </g>
			        <g
			          opacity="1"
			          style="display: block;"
			          transform="matrix(0,0,0,0,146.98800659179688,45.99399948120117)"
			        >
			          <g
			            opacity="1"
			            transform="matrix(1,0,0,1,0,0)"
			          >
			            <path
			              d=" M36.987998962402344,-36.12799835205078 C36.987998962402344,-36.12799835205078 38.1879997253418,-33.93299865722656 38.1879997253418,-33.93299865722656 C38.81800079345703,-32.78200149536133 39.763999938964844,-31.836000442504883 40.915000915527344,-31.20599937438965 C40.915000915527344,-31.20599937438965 43.10900115966797,-30.006000518798828 43.10900115966797,-30.006000518798828 C43.10900115966797,-30.006000518798828 40.915000915527344,-28.805999755859375 40.915000915527344,-28.805999755859375 C39.763999938964844,-28.177000045776367 38.81800079345703,-27.229999542236328 38.1879997253418,-26.07900047302246 C38.1879997253418,-26.07900047302246 36.987998962402344,-23.885000228881836 36.987998962402344,-23.885000228881836 C36.987998962402344,-23.885000228881836 35.78799819946289,-26.07900047302246 35.78799819946289,-26.07900047302246 C35.159000396728516,-27.229999542236328 34.21200180053711,-28.177000045776367 33.06100082397461,-28.805999755859375 C33.06100082397461,-28.805999755859375 30.865999221801758,-30.006000518798828 30.865999221801758,-30.006000518798828 C30.865999221801758,-30.006000518798828 33.06100082397461,-31.20599937438965 33.06100082397461,-31.20599937438965 C34.21200180053711,-31.836000442504883 35.159000396728516,-32.78200149536133 35.78799819946289,-33.93299865722656 C35.78799819946289,-33.93299865722656 36.987998962402344,-36.12799835205078 36.987998962402344,-36.12799835205078z"
			              fill="rgb(97,196,242)"
			              fill-opacity="1"
			            />
			          </g>
			        </g>
			        <g
			          style="display: none;"
			        >
			          <g>
			            <path />
			          </g>
			          <g>
			            <path />
			          </g>
			          <g>
			            <g>
			              <path />
			            </g>
			          </g>
			          <g>
			            <g>
			              <path />
			            </g>
			          </g>
			          <g>
			            <g>
			              <path />
			            </g>
			          </g>
			          <g>
			            <g>
			              <path />
			            </g>
			          </g>
			          <g>
			            <g>
			              <path />
			            </g>
			          </g>
			        </g>
			      </g>
			    </svg>
			  </div>
			  <p
			    class="MuiTypography-root MuiTypography-h6 css-2ulfj5-MuiTypography-root"
			  >
			    Connecting to NASA...
			  </p>
			</div>
		`)
	})
})
