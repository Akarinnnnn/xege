/*
* EGE (Easy Graphics Engine)
* HomePage      http://tcgraphics.sourceforge.net
* HomePage2     http://ege.orgfree.com/
* mail list     https://lists.sourceforge.net/lists/listinfo/tcgraphics-faqs
* teiba1        http://tieba.baidu.com/f?kw=ege
* teiba2        http://tieba.baidu.com/f?kw=ege%C4%EF
* resource      http://code.google.com/p/misaka/downloads/list
* Blog:         http://blog.misakamm.org
* E-Mail:       mailto:misakamm[at gmail com]
* QQ:           moegirl[at misakamm org]
* ��ϸ�����ĵ�����ѹ�������manĿ¼�£����������index.htm�Ϳ��Կ�����
*/

EGEͼ�ο�

����EGE��Easy Graphics Engine������windows�µļ��׻�ͼ�⣬��һ������BGI(graphics.h)������C/C++�������ֵ�ͼ�ο⣬����Ŀ��Ҳ��Ϊ�����TC��BGI������ڡ�����ʹ�÷�����TC�е�graphics.h�൱�ӽ�����������˵���򵥣��Ѻã��������֣���ѿ�Դ��������Ϊ�ӿ�����ֱ�ۣ���ʹ��֮ǰ��ȫû�нӴ���ͼ�α�̵ģ�Ҳ��Ѹ��ѧ������Ļ�ͼ�� Ŀǰ��EGEͼ�ο��Ѿ�����֧��VC6, VC2008, VC2010, C-Free, DevCpp, Code::Blocks, wxDev, Eclipse for C/C++��IDE����֧��ʹ��MinGWΪ���뻷����IDE���������Ҫ��VC��ʹ��graphics.h����ôege�����Ǻܺõ����Ʒ��

ΪʲôҪд����⣿
��������ѧ��̵Ķ��Ǵ� C ���Կ�ʼ���ŵģ���Ŀǰ����״�ǣ�
����1. ��ЩѧУ�� Turbo C Ϊ������ C ���ԣ�ֻ�� Turbo C �Ļ���ʵ��̫���ˣ�����ճ�����ܲ����㡣����dos���������ڵĲ���ϵͳ֧�ֺ����ޣ�����dos�¿�����ɫ��̫�١�
����2. ��ЩѧУֱ���� VC ���� C ���ԣ���Ϊ VC �ı༭�͵��Ի����������㣬���� VC ���ʺϽ�ѧ����Ѱ汾����ϧ��ѧ���� VC ��һ��ֻ����һЩ�����Ե���ϰ�⣬�뻭��ֱ�߻���Բ�����ѣ���Ҫע�ᴰ���ࡢ����Ϣѭ���ȵȣ���ѧ�߻������ش���ģ������г�ѧ����ΪCֻ���ڡ��ڿ���ʹ�á�
����3. ���м����ͼ��ѧ�����ſγ̵��ص��ǻ�ͼ�㷨�������� Windows ��̡����ԣ�������ʦ���ò��� TC ��ѧ����Ϊ Windows ��ͼ̫�����ˣ���ƫ���ѧ���ص㡣�µ�ͼ��ѧ�����в������õ� OpenGL�������ż���Ȼ�ܸߡ�
����������տ�ʼѧ C ���ԣ���������һλ��C���Ե���ʦ���ٻ������ڽ̼����ͼ��ѧ����ô�����һ���������˷ܵġ�����egeͼ�ο⣬����������VC�Ļ����з���Ĵ���������ͼ������������������Ϸ��

egeͼ�ο���ŵ�
������Ч�ʽϺá��ر��ڴ���������ͼģʽ�£�640*480�İ�͸����ϣ�����ֱ��ʹ�� getpixel / putpixel ��ɣ������Ż�������ڴ�Լ1.5G CPŲʽ�����ϴﵽ60fps ��60֡/�룩
�����������ǿ����ͼ����ֱ�����һ��PIMAGE�����߻��ڿؼ��ϣ�����ֻ�ܻ�����Ļ��
�����﹦�ܸ��ࡡ֧��������ͼ��֧��ͼƬ��ת��֧��͸����͸����ͼ��֧��ͼ��ģ���˾������������öԻ���������ͼ�λ������룬���Է���ض�֡�ʽ���׼ȷ�Ŀ��ƣ����Զ�ȡ���������е�ͼƬ��ʽ��bmp/jpg/png�������Ա���ͼƬΪbmp��png��ʽ��
��������ѿ�Դ����ͼ�ο�Ϊ��ѿ�Դ��ͼ�ο⣬�㲻�����Ի�ȡ��ͼ�ο��ȫ��Դ���룬��Ҳ���Բ��뵽��ͼ�ο�Ŀ�������������ϵ����misakamm

ege��Ҫʹ��˵��
����Ŀǰģ���˾������ BGI �Ļ�ͼ������ʹ���ϣ������Ļ�ͼ������ TC / BC û̫�����𡣿�һ����Բ�����Ӱɣ�
#include "graphics.h" // ������Ҫ�������ͼ�ο�
int main()
{
    initgraph(640, 480); // ��ʼ������ʾһ�����ڣ������ TC ��������
    circle(200, 200, 100); // ��Բ��Բ��(200, 200)���뾶 100
    getch(); // ��ͣһ�µȴ��û�����
    closegraph(); // �ر�ͼ�ν���
    return 0;
}
�����Ǻǣ��ܼ򵥰ɡ�����ϸ�������ege�ĵ���

ege�Ľ���
����Ŀǰege��Ŀ֮�£�����һ����ĿXege��x����x-window����Ϊ��Խ֧��x-window��ƽ̨����ҪΪlinuxϵͳ����Xege����չΪһ��ǿ��ģ���Դ�ģ���ƽ̨�ģ�ͬʱҲͬ���������ֵ�ͼ�ο⡣ĿǰXege�ڿ����С�