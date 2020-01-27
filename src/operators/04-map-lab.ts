import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';
const text = document.createElement( 'div' );

const calcScrollPercent = (e) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = e.target.documentElement;

    console.log({scrollTop, scrollHeight, clientHeight});

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan magna at imperdiet suscipit. Nunc aliquet efficitur tristique. Suspendisse condimentum tempor eros, et posuere ligula faucibus sagittis. Pellentesque ullamcorper placerat est, quis lacinia ante viverra sit amet. Etiam elementum, augue ac luctus convallis, tortor sem malesuada erat, id pulvinar lacus purus non eros. Nullam eu efficitur magna. Praesent ullamcorper sollicitudin quam, a pellentesque est viverra ac. Ut est magna, placerat sed commodo sit amet, imperdiet in ante. Proin convallis et lacus non pharetra. Duis vehicula tempus lorem, vel aliquet elit finibus eu. Phasellus ac nunc varius, pretium urna vel, maximus diam. Cras porta, orci condimentum semper tempus, est orci eleifend augue, id semper nisl odio a tortor. Aenean et pharetra tortor. Quisque cursus dapibus tristique. Fusce lacinia dui sed ligula auctor, laoreet facilisis purus rhoncus.
<br/><br/>
Suspendisse lobortis tellus ante, et tempor nisl tincidunt vel. Proin non lectus tristique, eleifend erat aliquet, pretium est. Donec ipsum neque, ornare nec convallis vitae, pharetra eget sapien. Ut malesuada pretium urna suscipit condimentum. Integer sit amet odio rhoncus, auctor est sit amet, auctor nunc. Nam sagittis ligula nec auctor scelerisque. In non neque gravida, ultricies tortor id, pulvinar nisl. Fusce eleifend mollis tempus. Aenean et velit dui. Nullam et tellus in lacus ullamcorper sagittis. Donec eget lectus a risus varius fermentum ut vulputate lacus. In vitae velit lectus.
<br/><br/>
Nunc eu sem velit. Vestibulum eu egestas nisi. Morbi tempor bibendum leo ut blandit. Aenean fermentum mauris a faucibus vehicula. Aenean porttitor et tellus eget iaculis. Suspendisse ac purus imperdiet, elementum dui quis, fermentum velit. Integer iaculis justo lacinia, convallis arcu eleifend, rutrum nisi. Donec egestas dui nunc, eu sagittis ligula sollicitudin at. Morbi fermentum magna in lectus mollis finibus. Phasellus dictum eget mi eu blandit. Nam pellentesque mauris risus, sed sollicitudin ipsum venenatis a. Maecenas lacus velit, faucibus ac diam eget, lacinia elementum ipsum. Vestibulum gravida sollicitudin augue, sed hendrerit ex molestie tempus. Ut eu vestibulum nisl. Proin vulputate velit arcu, id maximus lorem luctus id. Duis a aliquam magna, at semper sapien.
<br/><br/>
Cras elementum ut enim quis convallis. Pellentesque justo ex, molestie non nisi id, laoreet luctus ante. Cras dictum ipsum sit amet ultrices porta. Vestibulum bibendum tristique ligula a fringilla. Cras convallis, odio quis sagittis blandit, dui felis porta orci, at lacinia mauris elit a quam. Phasellus at purus ut odio commodo feugiat vehicula nec velit. Nunc placerat augue et leo dapibus, sit amet malesuada purus iaculis. Vivamus vitae elit suscipit, varius velit vitae, venenatis sapien. Nulla vitae orci sit amet neque mollis maximus pretium non purus. Pellentesque vestibulum dolor quis molestie consequat. Vivamus scelerisque, tellus at luctus aliquet, elit arcu laoreet elit, eu imperdiet augue orci quis lectus. Nunc lacinia odio sed est gravida, eget aliquet risus sodales. Etiam rhoncus aliquet tellus.
<br/><br/>
Nulla semper enim urna, in bibendum est molestie quis. Phasellus mauris velit, fringilla a aliquam non, lobortis a sem. In vel tincidunt nunc, at molestie odio. Nunc congue vehicula elit sit amet tempor. Duis aliquet urna massa. Quisque at erat et nibh venenatis aliquet. Donec aliquam libero quam, nec blandit sem mollis vitae. Nullam pharetra lacus leo, eu imperdiet augue ultrices nec. Sed lobortis risus quis pulvinar varius. Etiam diam lectus, ultrices a est non, mattis pretium risus. Morbi vel tristique odio. Quisque ultrices lectus sit amet molestie condimentum.
`
const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);
const scroll$ = fromEvent(document, 'scroll');

scroll$
.pipe(
    map( calcScrollPercent ),
    tap(console.log),
)
.subscribe(percent => {
    progressBar.style.width = `${percent}%`;
});
