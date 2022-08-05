from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from .models import Child, Results_of_test
from django.contrib.auth.models import User

nav = { "Головна": "/",
        "Особливості навчального процесу": "/osob_navch_proc",
        "Оснащеність засобами навчання": "/osnas",
        "Наші випускники": "/vipuskniki",
        "Наші традиції": "/traditions",
        "Організація дозвілля": "/organization",
        "Особливості прийому в школу": "/osob_priyomu",
        "Тестування": "/test",
}

def index(request):
    return render(request, 'main/index.html', {'nav': nav, 'title': 'Головна'})


def osob_navch_proc(request):
    return render(request, 'main/osob_navch_proc.html', {'nav': nav, 'title': 'Особливості навчального процесу'})


def osnas(request):
    if request.GET:
        dict = request.GET
        return render(request, 'main/osnas_table.html', {'nav': nav, 'title': 'Оснащеність засобами навчання', 'dict': dict})
    else:
        return render(request, 'main/osnas.html', {'nav': nav, 'title': 'Оснащеність засобами навчання'})


def osnas2(request, color):
    if request.GET:
        dict = request.GET
        return render(request, 'main/osnas_table.html', {'nav': nav, 'title': 'Оснащеність засобами навчання', 'dict': dict, 'color': color})
    else:
        return render(request, 'main/osnas.html', {'nav': nav, 'title': 'Оснащеність засобами навчання', 'color': color})


def vipuskniki(request):
    return render(request, 'main/vipuskniki.html', {'nav': nav, 'title': 'Наші випускники'})


def traditions(request):
    return render(request, 'main/traditions.html', {'nav': nav, 'title': 'Наші традиції'})


def organization(request):
    return render(request, 'main/organization.html', {'nav': nav, 'title': 'Організація дозвілля'})


def osob_priyomu(request):
    return render(request, 'main/osob_priyomu.html', {'nav': nav, 'title': 'Особливості прийому в школу'})


@csrf_exempt
@login_required(login_url='/accounts/login/')
def test(request):
    if request.method == 'POST':
        chname = request.POST["child_name"]
        chdate = request.POST["child_date"]
        chage = request.POST["child_age"]
        parent = request.user

        if Child.objects.filter(childname=chname):
            Child.objects.filter(childname=chname).update(age=chage)
            Child.objects.filter(childname=chname).update(date_of_birth=chdate)
        else:
            newChild = Child()
            newChild.childname = chname
            newChild.parent = parent
            newChild.date_of_birth = chdate
            newChild.age = chage
            newChild.save()

        print(request.POST)

        newResult = Results_of_test()
        right = request.POST["right_answers"]
        wrong = request.POST["wrong_answers"]
        newResult.child = Child.objects.get(childname=chname)
        newResult.right_answers = right
        newResult.wrong_answers = wrong
        if (int(right)/(int(right)+int(wrong))) >= 0.6:
            newResult.success = True
        else:
            newResult.success = False
        newResult.save()

    return render(request, 'main/test.html', {'nav': nav, 'title': 'Тестування'})




@login_required(login_url='/accounts/login/')
def user(request):
    users = User.objects.order_by('username')
    childs = Child.objects.order_by('childname')
    context = {
        'nav': nav,
        'title': 'Особистий кабінет',
        'users': users,
        'childs': childs,
    }
    return render(request, 'main/user.html', context=context)


@login_required(login_url='/accounts/login/')
def user_childs(request, user_id):
    users = User.objects.filter(pk=user_id)
    childs = Child.objects.order_by('childname').filter(parent_id=user_id)
    context = {
        'nav': nav,
        'title': 'Особистий кабінет',
        'user_id': user_id,
        'users': users,
        'childs': childs,
    }
    return render(request, 'main/user_childs.html', context=context)


@login_required(login_url='/accounts/login/')
def user_child_results(request, user_id, child_id):
    childs = Child.objects.order_by('childname').filter(parent_id=user_id)
    results = Results_of_test.objects.order_by('-datetime').filter(child_id=child_id)
    context = {
        'nav': nav,
        'title': 'Особистий кабінет',
        'user_id': user_id,
        'childs': childs,
        'results': results,
    }
    return render(request, 'main/child_results.html', context=context)


def pageNotFound(request, exception):
    return HttpResponseNotFound('<h1 style="margin: 50 auto; text-align: center;">Страница не найдена</h1><p style="margin: 50 auto; text-align: center;">Страницы по такому адресу не существует</p>')


